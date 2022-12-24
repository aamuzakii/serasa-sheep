import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ALL_AWARDS} from '../graphql/queries'
import styles from './Awards.module.scss'
import middleware from '../helper/middleware'

const Awards = () => {
  const [journalList, setJournalList] = useState('')

  useEffect(() => {
    middleware('award')
  }, [])

  let {data} = useQuery(GET_ALL_AWARDS, {})

  useEffect(() => {
    if (data) {
      let arr = data.awardCollection.items
      arr = arr.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
      setJournalList(arr)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.mid}>
        <h1 className={styles.big_font}>Our Awards</h1>
        {journalList &&
          journalList.map(({title, pictureCollection, date, sys}, i) => {
            let dateObject = new Date(date)
            let cleanDate = dateObject.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})
            return (
              <a href={'/awards/' + sys.id} key={i}>
                <div className={styles.card}>
                  <div className={styles.thumbnail_webinar}>
                    <img src={pictureCollection.items[0].url} alt={title} />
                  </div>
                  <div className={styles.foo}>
                    <h3>{title}</h3>
                    <p>{cleanDate}</p>
                  </div>
                </div>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default Awards
