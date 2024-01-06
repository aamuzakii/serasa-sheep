import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_JOURNAL, GET_IMG_BY_ID} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import Back from '../components/Back'
import style from './Construction.module.scss'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import middleware from '../helper/middleware'
import {GET_BUILT_PROJECTS} from '../graphql/queries'
import Image from '../components/Image'
import Manual from '../components/Manual'
import {txtdata, constAndFee} from './construction'

const firstId = '6aI6XUHSSfJE0w3lb1VWYF'

function Journal() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  let res = useQuery(GET_BUILT_PROJECTS, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    setProjects()
  }, [])

  const {id} = useParams()
  let {data} = useQuery(GET_SINGLE_JOURNAL, {
    variables: {journalSysId: '1rxiURUoAB8dLTqjAyjy8Q'},
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
      <section className={style.first}>
        <div className={style.left}>
          <img src={'../../images/seracon.webp'} alt="banner image" className={style.img} />
        </div>
        <div className={style.right}>
          <h1>Hindari Kerugian</h1>
          <h1>Akibat Salah Bangun</h1>
          <p>Tim kontraktor kami siap membantu anda membangun hunian idaman secara transparan tanpa markup harga atau downgrade kualitas material.</p>
          <button
            className={style.learn_more}
            onClick={() =>
              document.getElementById('problem').scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Pelajari
          </button>
        </div>
      </section>
      <h1 id="problem" className={style.full_title}>
        Masalah yang Sering Terjadi Saat Membangun Rumah
      </h1>
      <div className={style.dark_container}>
        {txtdata.map((item, index) => (
          <div key={index}>
            <img src={item.imageSrc || ''} alt={item.altText} height={100} width={100} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h1>SKEMA COST & FEE</h1>
      <div className={style.dark_container}>
        {constAndFee.map((item, index) => (
          <div key={index}>
            <img src={item.imageSrc || ''} alt={item.altText} height={100} width={100} />
            <p>{item.description}</p>
          </div>
        ))}
        <a href="/chat">
          <button className={style.learn_more}>HUBUNGI KAMI</button>
        </a>
      </div>
      <h1>Alur Skema</h1>
      <Manual />
      <h1>Portofolio</h1>
      <div className={style.portofolio_container}>
        {res.data?.projectCollection.items.map((item, index) => (
          <div key={index} className={style.three_row}>
            <div className={style.image_container} onClick={() => navigate(`/projects/${item.sys.id}`)}>
              <Image src={item.picturesCollection.items[0].url} alt={item.altText} className={style.img} />
            </div>
            <p>{item.name + ' ' + item.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journal
