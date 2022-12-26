import React, {useEffect, useState} from 'react'
import style from './Project.module.scss'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_AWARD} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import middleware from '../helper/middleware'
import Back from '../components/Back'

const Award = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 300) // workaround
    }, 350)
  }, [])

  useEffect(() => {
    middleware('foo')
  }, [])

  const {id} = useParams()
  const [richText, setRichText] = useState('')

  const {data} = useQuery(GET_SINGLE_AWARD, {
    variables: {journalSysId: id},
  })

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.award.content.json))
    }
  }, [data])

  if (!data) return
  let {pictureCollection: assets} = data.award

  return (
    <div className={style.container}>
      <div className={style.injected_rich_text}>
        <section dangerouslySetInnerHTML={{__html: richText}}></section>
        <Back destination="awards"></Back>
      </div>

      <section className={style.asset_list}>
        {assets.items.map(({url}, i) => {
          return (
            <div className={style.single_person} key={i}>
              <img src={url} alt="" className={style.imgo} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Award
