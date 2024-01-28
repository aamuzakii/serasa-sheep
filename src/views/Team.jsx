import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ALL_TEAMS, GET_IMG_BY_ID} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import style from './Team.module.scss'
import middleware from '../helper/middleware'
import Image from '../components/Image'

function About() {
  let {data} = useQuery(GET_ALL_TEAMS, {})

  const [staffs, setStaffs] = useState('')
  const [contributors, setContributors] = useState('')
  const [boardMembers, setBoardMembers] = useState('')

  useEffect(() => {
    middleware('foo')
  }, [])

  useEffect(() => {
    if (data) {
      let arr = data.teamCollection.items

      let s = arr.filter((x) => x.type === 'team')
      let b = arr.filter((x) => x.type === 'board member')
      let c = arr.filter((x) => x.type === 'contributor')

      b = b.slice().sort((a, b) => a.order - b.order)
      s = s.slice().sort((a, b) => a.order - b.order)
      c = c.slice().sort((a, b) => a.order - b.order)

      setStaffs(s)
      setBoardMembers(b)
      setContributors(c)
    }
  }, [data])

  if (!data) return <></>
  if (!staffs || !boardMembers) return <></>

  return (
    <div className={style.container}>
      <h1 className={style.center}>Board Member</h1>
      <section className={style.board_member}>
        {boardMembers.map(({name, bio, photo, position}) => {
          return (
            <div className={style.single_person}>
              <Image src={photo.url} alt="" size={300} />
              <p className={style.name}>{name}</p>
              <i className={style.position}>{position}</i>
              <p dangerouslySetInnerHTML={{__html: documentToHtmlString(bio.json)}} className={style.injected_rich_text}></p>
            </div>
          )
        })}
      </section>
      <h1 className={style.center}>Teams</h1>
      <section className={style.board_member}>
        {staffs.map(({name, bio, photo, position}) => {
          return (
            <div className={style.single_person}>
              <Image src={photo.url} alt="" size={220} />
              <p className={style.name}>{name}</p>
              <i className={style.position}>{position}</i>
              <p dangerouslySetInnerHTML={{__html: documentToHtmlString(bio.json)}} className={style.injected_rich_text}></p>
            </div>
          )
        })}
      </section>
      <h1 className={style.center}>Contributors</h1>
      <section className={style.board_member}>
        {contributors.map(({name, position}) => {
          return (
            <div className={style.single_person}>
              <p className={style.name}>{name}</p>
              <i className={style.position}>{position}</i>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default About
// staff cuma beda size nya jadi 220
