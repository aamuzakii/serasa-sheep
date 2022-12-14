import React, {useEffect, useState} from 'react'
import style from './Project.module.scss'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_PROJECT} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import middleware from '../helper/middleware'
import Back from '../components/Back'

const Project = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 300) // workaround
    }, 350)
    // stagger = jarak satu dgn lainnya
  }, [])

  useEffect(() => {
    middleware('foo')
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

  return (
    <div className={style.container}>
      <div className={style.injected_rich_text}>
        <section dangerouslySetInnerHTML={{__html: richText}}></section>
        <Back></Back>
      </div>

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

export default Project
