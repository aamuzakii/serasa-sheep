import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ALL_JOURNALS} from '../graphql/queries'
import styles from '../stylesheets/Journal.module.scss'

const Journal = () => {
  const [journalList, setJournalList] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'static'
  }, [])

  let {loading, error, data, refetch} = useQuery(GET_ALL_JOURNALS, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (data) {
      setJournalList(data.journalCollection.items)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.mid}>
        <h1 className={styles.big_font}>Our Journals</h1>
        {journalList &&
          journalList.map(({title, pictureCollection, date}, i) => {
            let dateObject = new Date(date)
            let cleanDate = dateObject.toLocaleDateString()
            return (
              <div className={styles.card} key={i}>
                <div className={styles.thumbnail_webinar}>
                  <img src={pictureCollection.items[0].url} alt="foo" />
                </div>
                <div className={styles.foo}>
                  <h3>{title}</h3>
                  <p>{cleanDate}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Journal
