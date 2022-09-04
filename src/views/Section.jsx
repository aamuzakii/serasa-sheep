import React, { useEffect, useState } from 'react'
import Isotope from 'isotope-layout'
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase"


function Section({ dasar, dasarDict, code }) {

  let initialDataBuffer = [
    {
      name: 'SMK Muhammadiyah Parung',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Depok',
      color: 'white',
      x: 100,
      y: 20,
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'white',
      x: 1000,
      y: 20,
    },
    {
      name: 'Central Park Taiwan',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Taiwan',
      color: 'white',
      x: 100,
      y: 0,
    },
    {
      name: 'Bank Syariah Indonesia',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'white',
      x: 100,
      y: 20,
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Bogor',
      color: 'white',
      x: 1000,
      y: 20,
    },
    {
      name: 'Central Park',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Jakarta',
      color: 'white',
      x: 100,
      y: 0,
    },
    {
      name: 'Bank Syariah Indonesia',
      year: 2021,
      program: 'urban',
      scale: '>1000',
      status: 'idea',
      location: 'Jakarta',
      color: 'white',
      x: 100,
      y: 20,
    },
    {
      name: 'Jembatan UI',
      year: 2022,
      program: 'housing',
      scale: '>1000',
      status: 'idea',
      location: 'Bogor',
      color: 'white',
      x: 1000,
      y: 20,
    },
    {
      name: 'Central Park',
      year: 2022,
      program: 'urban',
      scale: '>1000',
      status: 'completed',
      location: 'Jakarta',
      color: 'white',
      x: 100,
      y: 0,
    },
  ]

  const [projects, setProjects] = useState(initialDataBuffer);


  useEffect(() => {
    const database = getDatabase(app);
    const reference = ref(database, '/projects');
    let data

    onValue(reference, (snapshot) => {
      data = snapshot.val();

      data = data.map(element => {
        element.color = 'white'
        element.status = 'completed'
        element.year = element.appointment
        element.image_link = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
        return element
      })
      console.log(data, `< in`)

      setProjects(data)
    });
  }, [])

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

  const colorDict = {
    'white': 'white',
    'white': 'white'
  }

  useEffect(() => {
    setFilterKey(()=> dasarDict[dasar])
  }, [dasar])

  let c = `satu-row ${container}`

  return (
    <div className='section' >
      <h1 className='font-anu' style={{ textAlign: 'center' }} >{dasarDict[dasar]}</h1>
    <div className={c} >
      {
          projects.map(({ color, year, program, status, location, name, image_link }, i) => {
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