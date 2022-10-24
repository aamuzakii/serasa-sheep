import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ABOUT_PAGE} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'
import middleware from '../helper/middleware'

function About() {
  let {loading, error, data, refetch} = useQuery(GET_ABOUT_PAGE, {
    fetchPolicy: 'network-only',
    variables: {staticSysId: '7xr37H6HNyz32EhhYCb9kZ'},
  })
  const [richText, setRichText] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
    a.top = '0px'
    a.display = 'block'
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  return (
    <div className="container about">
      <div className="img-container">
        <img src="https://res.cloudinary.com/dm9ufmxnq/image/upload/v1664145976/serasa/Picture4_jib7k8_ziiyky.webp" alt="about" />
      </div>
      <div className="right">
        <h1>About Us</h1>
        <Markup content={richText} />
      </div>
    </div>
  )
}

export default About
