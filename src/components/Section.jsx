import React, {useEffect, useState} from 'react'
import Isotope from 'isotope-layout'
import {Link} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_ALL_PROJECT} from '../graphql/queries'

function Section({dasar, dasarDict, code}) {
  const [projects, setProjects] = useState([])
  let {data} = useQuery(GET_ALL_PROJECT, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (data) {
      data.projectCollection.items = data.projectCollection.items.map((element) => {
        element.color = 'white'
        element.status = 'completed'
        element.program = 'program-name' // di nama class gaboleh ada yg undefined, nanti jadi banyak
        if (!element.main_picture) element.main_picture = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
        return element
      })
      setProjects(data.projectCollection.items)
    }
  }, [data])

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
  }, [projects]) // harus tambah dependency ternyata buat solve bug

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*' ? isotope.current.arrange({filter: `*`}) : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey, projects]) // harus tambah dependency ternyata buat solve bug

  const colorDict = {
    white: 'white',
    white: 'white',
  }

  useEffect(() => {
    if (dasar === 'all') {
      setFilterKey('*')
    } else {
      setFilterKey(() => dasarDict[dasar])
    }
  }, [dasar])

  const classToReadableTitleDict = {
    bogor: 'Bogor',
    depok: 'Depok',
    serang: 'Serang',
    madiun: 'Madiun',
    serang: 'Serang',
    cilegon: 'Cilegon',
    serang: 'Serang',
    y2021: '2021',
    y2022: '2022',
    y2023: '2023',
    residential: 'Residential',
    commercial: 'Commercial',
    educational: 'Educational',
    public_space: 'Public Space',
    others: 'Others',
  }

  let sectionTitle = classToReadableTitleDict[dasarDict[dasar]]

  let c = `satu-row ${container}`

  // trik buat tab ALL
  //jadi kita passing wildcard sbg filter key, nah smwa row akan tampilin all. buat biar cuma nampilin row pertama pake ini:
  if (code !== 'a' && filterKey === '*') {
    return (
      <div className="section">
        <h1 className="font-anu" style={{textAlign: 'center'}}>
          {sectionTitle}
        </h1>
        <div className={c}>
          {projects.map(({color, year, program, status, location, name, picturesCollection, projectType, sys}, i) => {
            let kelas = `${item} ${program} ${status} y${year} ${location} ${projectType}`
            return <div key={i} className={kelas}></div>
          })}
        </div>
      </div>
    )
  }
  // return <></>

  return (
    <div className="section">
      <h1 className="font-anu" style={{textAlign: 'center'}}>
        {sectionTitle}
      </h1>
      <div className={c}>
        {projects.map(({color, year, program, status, location, name, picturesCollection, projectType, sys}, i) => {
          let kelas = `${item} ${program} ${status} y${year} ${location} ${projectType}`
          return (
            <div key={i} className={kelas}>
              <Link to={sys.id} className="box image" style={{background: color, color: colorDict[color]}}>
                <p className="small-text">{name}</p>
                <div className="box-gradient-layer"></div>
                <img className="inner-img" src={picturesCollection.items[0].url} alt="" />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section
