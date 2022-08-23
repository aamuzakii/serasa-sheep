import React, { useEffect } from 'react'
import Isotope from 'isotope-layout'
import { Link } from "react-router-dom";

function Section({dasar, dasarDict, code}) {

  let data = [
    {
      name: 'Bank Syariah Indonesia',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'blue',
      x: 100,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg'
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Bogor',
      color: '#EE4B4B',
      x: 1000,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp'
    },
    {
      name: 'Central Park',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Jakarta',
      color: '#84D8F6',
      x: 100,
      y: 0,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
    },
    {
      name: 'Bank Syariah Indonesia',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'blue',
      x: 100,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg'
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Bogor',
      color: '#EE4B4B',
      x: 1000,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp'
    },
    {
      name: 'Central Park',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Jakarta',
      color: '#84D8F6',
      x: 100,
      y: 0,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
    },
    {
      name: 'Bank Syariah Indonesia',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'blue',
      x: 100,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg'
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Bogor',
      color: '#EE4B4B',
      x: 1000,
      y: 20,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp'
    },
    {
      name: 'Central Park',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Jakarta',
      color: '#84D8F6',
      x: 100,
      y: 0,
      image_link: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
    },
  ]

  let container = 'filter-container' + code
  let dotContainer = '.filter-container' + code
  let item = 'filter-item' + code
  let dotItem = '.filter-item' + code

  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(dotContainer, {
      itemSelector: dotItem,
      layoutMode: 'fitRows',
    })
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => {
    return setFilterKey(key)
  }
  
  const colorDict = {
    '#84D8F6': 'white',
    '#EE4B4B': 'white'
  }

  useEffect(() => {
    setFilterKey(()=> dasarDict[dasar])
  }, [dasar])

  let c = `playground-container ${container}`

  return (
    <div className='section' >
      <h1 className='font-anu' style={{ textAlign: 'center' }} >{dasarDict[dasar]}</h1>
    <div className={c} >
      {
        data.map(({color, year,  program, status, location, name, image_link}, i)=> {
          let kelas = `${item} ${program} ${status} y${year} ${location}`
          return (
            <div key={i} className={kelas} >
              <Link to={i.toString()} className='box image' style={{ background: color, color: colorDict[color] }} >
                <p className='tulisan-kecil-corner small-text' >{name}</p>
                <div className='box-gradient-layer' ></div>
                <img className='inner-img' src={image_link} alt="" />
              </Link>
            </div>
          )
        })
      }
    </div>

    </div>
  )
}

export default Section