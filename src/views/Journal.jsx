import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SINGLE_JOURNAL, GET_IMG_BY_ID } from '../graphql/queries'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Markup } from 'interweave'
import style from './Journal.module.scss'
import { useParams } from 'react-router-dom'

const firstId = '6aI6XUHSSfJE0w3lb1VWYF'

function Journal() {
  const { id } = useParams()
  let { loading, error, data, refetch } = useQuery(GET_SINGLE_JOURNAL, {
    fetchPolicy: 'network-only',
    variables: { journalSysId: id },
  })

  let { data: imageData } = useQuery(GET_IMG_BY_ID, {
    fetchPolicy: 'network-only',
    variables: { projectSysId: firstId },
  })

  const [richText, setRichText] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
    a.top = '0px'
    a.display = 'block'
  }, [])

  useEffect(() => {
    if (data) {
      setImage(data.journal.pictureCollection.items[0].url);
      const parsedHtml = documentToHtmlString(data.journal.content.json)
      setRichText(parsedHtml)
    }
  }, [data])

  if (!image) return <></>

  return (
    <div className={style.container} >
      <div className={style.image_wrapper}>
        <img src={image} alt="Journal poster" className={style.img} />
      </div>
      <div className={style.markup_wrapper}>
        <h1>{data.journal.title}</h1>
        <Markup content={richText} />
      </div>
    </div>
  )
}

export default Journal
