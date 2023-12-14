import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_JOURNAL, GET_IMG_BY_ID} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import Back from '../components/Back'
import style from './Construction.module.scss'
import {useParams} from 'react-router-dom'
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
    },
    {
      altText: 'image',
      description: 'Pengerjaan oleh tukang yang ASAL dan kurang rapi',
    },
    {
      altText: 'image',
      description: 'Manipulasi spek bangunan oleh mandoor / kontraktor, kualitas tidak sesuai dengan yang dibayarkan',
      height: 100,
    },
    {
      altText: 'image',
      description: 'Ditinggal KABUR oleh tukang dan tidak ada GARANSI',
    },
  ]
  const constAndFee = [
    {
      altText: 'image',
      imageSrc: 'https://lh3.googleusercontent.com/keep-bbsk/ALhRneHiWolFxJA6ClWQBqMvvGKQsnxzOY-Yq_LqsETsJfYu7hVHkZSmDrj1hXiTJ9FDQR0RTKIG_d0K84RxdfKaG8nprODjjALS-fejqHidg5jq8Zw=s700',
      description: 'Laporan penggunaan dana klien oleh kami dengan sangat transparan, disertai dengan  nota pembelanjaan & laporan absensi pekerja harian',
    },
    {
      altText: 'image',
      description: 'Supplier material yang kami pakai adalah supplier TERMURAH, KW 1 dan TERJAMIN KUALITASNYA',
    },
    {
      altText: 'image',
      description: 'Tukang yang bekerja dengan kami seluruhnya bersertifikat, dengan track record pekerjaan yang jelas serta lulus berbagai pelatihan',
    },
    {
      altText: 'image',
      description: 'Terdapat Mandoor profesional yang selalu mengawasi keseluruhan proyek dan memonitor progressnya setiap hari',
    },
    {
      altText: 'image',
      description: 'Hasil pekerjaan seluruhnya ter GARANSI oleh kami, masa pemeliharaan selama 60 hari setelah pekerjaan selesai',
    },
  ]

  return (
    <div className={style.container}>
      <div className={style.image_wrapper}>
        <img src={image} alt="Journal poster" className={style.img} />
      </div>
      <div className={style.markup_wrapper}>
        <h1>{data.journal.title}</h1>
        <p dangerouslySetInnerHTML={{__html: documentToHtmlString(richText)}} className={style.injected_rich_text}></p>
        <Back destination="journals"></Back>
      </div>
      <h3>Masalah yang HAMPIR SELALU TERJADI saat membangun rumah</h3>
      <div className={style.dark_container}>
        {txtdata.map((item, index) => (
          <div key={index}>
            <img src={item.imageSrc || ''} alt={item.altText} height={100} width={100} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h3>SKEMA COST & FEE</h3>
      <div className={style.dark_container}>
        {constAndFee.map((item, index) => (
          <div key={index}>
            <img src={'' || ''} alt={item.altText} height={100} width={100} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h3>SKEMA COST & FEE</h3>
      <div className={style.dark_container}>
        {res.data?.projectCollection.items.map((item, index) => (
          <div key={index}>
            <img src={item.picturesCollection.items[0].url} alt={item.altText} height={100} width={100} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journal
