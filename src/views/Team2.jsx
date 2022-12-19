import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_TEAMS, GET_IMG_BY_ID } from '../graphql/queries'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { getRichTextEntityLinks } from '@contentful/rich-text-links'
import { Markup } from 'interweave'
import middleware from '../helper/middleware'
import style from './Team2.module.scss'

function About() {
  let { data } = useQuery(GET_ALL_TEAMS, {
  })

  const [staffs, setStaffs] = useState('')
  const [boardMembers, setBoardMembers] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
    a.top = '0px'
    a.display = 'block'
  }, [])

  useEffect(() => {
    if (data) {
      let arr = data.teamCollection.items

      let s = arr.filter(x => x.type === 'staff');
      let b = arr.filter(x => x.type === 'board member');

      b = b.slice().sort((a, b) => a.order - b.order)
      s = s.slice().sort((a, b) => a.order - b.order)

      setStaffs(s)
      setBoardMembers(b)
    }
  }, [data])

  if (!data) return <></>
  if (!staffs || !boardMembers) return <></>

  return (
    <div className={style.container} >
      <h1 className={style.center} >Board Member</h1>
      <section className={style.board_member} >
        {
          boardMembers.map(({ name, bio, photo, position }) => {
            return <div className={style.single_person} >
              <img src={photo.url} alt="" width={300} />
              <p className={style.name} >{name}</p>
              <i className={style.position} >{position}</i>
              <p dangerouslySetInnerHTML={{ __html: documentToHtmlString(bio.json) }} className={style.injected_rich_text}></p>
            </div>
          })
        }
      </section>
      <h1 className={style.center} >Staff</h1>
      <section className={style.board_member} >
        {
          staffs.map(({ name, bio, photo, position }) => {
            return <div className={style.single_person} >
              <img src={photo.url} alt="" width={220} />
              <p className={style.name} >{name}</p>
              <i className={style.position} >{position}</i>
              <p dangerouslySetInnerHTML={{ __html: documentToHtmlString(bio.json) }} className={style.injected_rich_text}></p>
            </div>
          })
        }
      </section>
    </div>
  )
}

export default About
// staff cuma beda width nya jadi 220