import React, {useState, useEffect} from 'react'
import { useQuery } from "@apollo/client";
import {  GET_STATIC_DATA } from "../graphql/queries";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Markup } from 'interweave';

function About() {

  let { loading, error, data, refetch } = useQuery(GET_STATIC_DATA, {
    fetchPolicy: "network-only",
  });
  const [richText, setRichText] = useState('');

  useEffect(() => {
    let a = document.querySelector(".nav-container").style
    a.position = "absolute"
    a.top = "0px"
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.about.about.json))
    }
  }, [data]);

  const text = 'Andra Matin both the man and the firm, andramatin, are known for their clean and modern approach to architecture. The works of andramatin has been a constant reflection of contemporary take on traditional values, that are based on its context and its sensitivity to the environment. Aside from his architectural projects, Andra Matin is also one of the founders of Arsitek Muda Indonesia (AMI – eng: Young Architects of Indonesia), and has been.'
  
  return (
    <div className='container about' >
      <div className='img-container' >
        <img src="https://res.cloudinary.com/dm9ufmxnq/image/upload/v1664145976/serasa/Picture4_jib7k8_ziiyky.webp" alt="about" />
      </div>
      <div className='right' >
        <h1 style={{ fontSize: 60 }} >About Us</h1>
        <Markup content={richText} />
      </div>
    </div>
  )
}

export default About