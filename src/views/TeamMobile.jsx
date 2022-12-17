import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ABOUT_PAGE, GET_IMG_BY_ID } from '../graphql/queries'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { getRichTextEntityLinks } from '@contentful/rich-text-links'
import { Markup } from 'interweave'
import middleware from '../helper/middleware'
import style from './TeamMobile.module.scss'

const firstId = '6aI6XUHSSfJE0w3lb1VWYF'
const secondId = '5LED5Hj4Uh2H5A3phKCAnL'
const firstImg = 'https://images.ctfassets.net/0wvobgztd3t0/6aI6XUHSSfJE0w3lb1VWYF/124cf0f27487c7e985aacf96fd4de81f/Kafi.jpg'
const secondImg = 'https://images.ctfassets.net/0wvobgztd3t0/5LED5Hj4Uh2H5A3phKCAnL/d6fb6a34e8b635524119452c1ca35c11/Ryan.jpg'

function About() {
  let { loading, error, data, refetch } = useQuery(GET_ABOUT_PAGE, {
    variables: { staticSysId: '7xr37H6HNyz32EhhYCb9kZ' },
  })

  // let { data : imageData} = useQuery(GET_IMG_BY_ID, {
  //   variables: {projectSysId: firstId},
  // }) // << to make scalabale should use this instead of hardcode the img link
  const img1 = 'https://images.ctfassets.net/0wvobgztd3t0/5LED5Hj4Uh2H5A3phKCAnL/d6fb6a34e8b635524119452c1ca35c11/Ryan.jpg'

  const [richText, setRichText] = useState('')
  const [richText2, setRichText2] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
    a.top = '0px'
    a.display = 'block'
  }, [])

  useEffect(() => {
    if (data) {
      let template = `<img src=${firstImg} alt="" height=${500} />`
      let template2 = `<img src=${secondImg} alt="" height=${500} />`
      let parsedHtml = documentToHtmlString(data.staticData.content.json)
      let x = parsedHtml.split('section_boundary')[0]
      let x2 = parsedHtml.split('section_boundary')[1]
      setRichText(x)
      setRichText2(x2)
    }
  }, [data])

  return (
    <div>
      {/* atas */}
      <div>
        <div className={style.image_wrapper}>
          <img src={firstImg} alt="about" className={style.img} />
        </div>
        <div className={style.markup_wrapper}>
          <h1>About Us</h1>
          <Markup content={richText} />
        </div>
      </div>
      {/* bawah */}
      <div>
        <div className={style.image_wrapper}>
          <img src={secondImg} alt="about" className={style.img} />
        </div>
        <div className={style.markup_wrapper}>
          <Markup content={richText2} />
        </div>
      </div>
    </div>
  )
}

export default About
