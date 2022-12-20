import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_JOURNAL, GET_IMG_BY_ID} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'
import style from './Journal.module.scss'
import {useParams} from 'react-router-dom'
import middleware from '../helper/middleware'

const firstId = '6aI6XUHSSfJE0w3lb1VWYF'

function Journal() {
  const {id} = useParams()
  let {data} = useQuery(GET_SINGLE_JOURNAL, {
    variables: {journalSysId: id},
  })

  useEffect(() => {
    middleware('foo')
  }, [])

  let {data: imageData} = useQuery(GET_IMG_BY_ID, {
    variables: {projectSysId: firstId},
  })

  const [richText, setRichText] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (data) {
      setImage(data.journal.pictureCollection.items[0].url)
      const parsedHtml = data.journal.content.json
      setRichText(parsedHtml)
    }
  }, [data])

  if (!image) return <></>

  return (
    <div className={style.container}>
      <div className={style.image_wrapper}>
        <img src={image} alt="Journal poster" className={style.img} />
      </div>
      <div className={style.markup_wrapper}>
        <h1>{data.journal.title}</h1>
        <p dangerouslySetInnerHTML={{__html: documentToHtmlString(richText)}} className={style.injected_rich_text}></p>
      </div>
    </div>
  )
}

export default Journal
