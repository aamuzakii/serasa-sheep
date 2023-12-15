import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_JOURNAL, GET_IMG_BY_ID} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import Back from '../components/Back'
import style from './Construction.module.scss'
import {Link, useParams} from 'react-router-dom'
import middleware from '../helper/middleware'
import {GET_BUILT_PROJECTS} from '../graphql/queries'

const firstId = '6aI6XUHSSfJE0w3lb1VWYF'

function Journal() {
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

  const txtdata = [
    {
      altText: 'image',
      description: 'Keluar UANG TERLALU BANYAK saat bangun rumah alias BONCOS',
      imageSrc: '/icon/pig.webp',
    },
    {
      altText: 'image',
      description: 'Pengerjaan oleh tukang yang ASAL dan kurang rapi',
      imageSrc: '/icon/broken.webp',
    },
    {
      altText: 'image',
      description: 'Manipulasi spek bangunan oleh mandoor / kontraktor, kualitas tidak sesuai dengan yang dibayarkan',
      imageSrc: '/icon/eat.webp',
    },
    {
      altText: 'image',
      description: 'Ditinggal KABUR oleh tukang dan tidak ada GARANSI',
      imageSrc: '/icon/thief.webp',
    },
  ]
  const constAndFee = [
    {
      altText: 'image',
      imageSrc: 'https://lh3.googleusercontent.com/keep-bbsk/ALhRneHiWolFxJA6ClWQBqMvvGKQsnxzOY-Yq_LqsETsJfYu7hVHkZSmDrj1hXiTJ9FDQR0RTKIG_d0K84RxdfKaG8nprODjjALS-fejqHidg5jq8Zw=s700',
      description: 'Laporan penggunaan dana klien oleh kami dengan sangat transparan, disertai dengan  nota pembelanjaan & laporan absensi pekerja harian',
      imageSrc: '/icon/dollar.webp',
    },
    {
      altText: 'image',
      description: 'Supplier material yang kami pakai adalah supplier TERMURAH, KW 1 dan TERJAMIN KUALITASNYA',
      imageSrc: '/icon/cart.webp',
    },
    {
      altText: 'image',
      description: 'Tukang yang bekerja dengan kami seluruhnya bersertifikat, dengan track record pekerjaan yang jelas serta lulus berbagai pelatihan',
      imageSrc: '/icon/eng_blind.webp',
    },
    {
      altText: 'image',
      description: 'Terdapat Mandoor profesional yang selalu mengawasi keseluruhan proyek dan memonitor progressnya setiap hari',
      imageSrc: '/icon/eng_eye.webp',
    },
    {
      altText: 'image',
      description: 'Hasil pekerjaan seluruhnya ter GARANSI oleh kami, masa pemeliharaan selama 60 hari setelah pekerjaan selesai',
      imageSrc: '/icon/hand.webp',
    },
  ]

  const firstSectionImage = 'https://images.ctfassets.net/0wvobgztd3t0/4WmB85OMNMPPK5FvyeaMih/571afb67a5119edb060ffeae98394c3d/CGN90_01.jpg'

  return (
    <div className={style.container}>
      <section className={style.first}>
        <div className={style.image_wrapper}>
          <img src={firstSectionImage} alt="Journal poster" className={style.img} />
        </div>
        <div className={style.right}>
          <h1>Hindari Kerugian</h1>
          <h1>Akibat Salah Bangun</h1>
          <p>Tim kontraktor kami siap membantu anda membangun hunian idaman secara transparan tanpa markup harga atau downgrade kualitas material.</p>
          <button className={style.learn_more}>PELAJARI LEBIH LANJUT</button>
        </div>
      </section>
      <h1>Masalah yang HAMPIR SELALU TERJADI saat membangun rumah</h1>
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
        <button className={style.learn_more}>HUBUNGI KAMI</button>
      </div>
      <h1>Portofolio</h1>
      <div className={style.portofolio_container}>
        {res.data?.projectCollection.items.map((item, index) => (
          <div key={index} className={style.three_row}>
            <Link to={'/projects/' + item.sys.id}>
              <img src={item.picturesCollection.items[0].url} alt={item.altText} height={200} />
              <p>{item.name + ' ' + item.year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journal
