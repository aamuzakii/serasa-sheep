import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NavList2 from '../components/NavList2'
import middleware from '../helper/middleware'
import {Markup} from 'interweave'
import style from './ProjectBold.module.scss'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_PROJECT} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import spinner from '../assets/spinner.png'

let v1 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243857/serasa/videos/1_cgn_mmcsor.mp4'

const ProjectParallax = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 300) // workaround
    }, 350)
    // stagger = jarak satu dgn lainnya
  }, [])

  const {id} = useParams()
  const [richText, setRichText] = useState('')

  const {data} = useQuery(GET_SINGLE_PROJECT, {
    variables: {projectSysId: id},
  })

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.project.description.json))
    }
  }, [data])

  if (!data) return
  let {description, picturesCollection: assets} = data.project

  console.log(richText)

  return (
    <div className={style.container}>
      <p dangerouslySetInnerHTML={{__html: richText}} className={style.injected_rich_text}></p>

      <section className={style.asset_list}>
        {assets.items.map(({url}, i) => {
          if (true) {
            return (
              <div className={style.single_person}>
                <img src={url} alt="" className={style.imgo} />
              </div>
            )
          } else {
          }
        })}
      </section>
    </div>
  )
}

export default ProjectParallax
