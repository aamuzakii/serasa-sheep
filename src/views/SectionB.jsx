import React, { useEffect } from 'react'
import Isotope from 'isotope-layout'

function Section({dasar, dasarDict}) {

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
      kelas: 'box fooo'
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
      kelas: 'box fooo'
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
      kelas: 'box sdsd'
    },
  ]



  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container-b', {
      itemSelector: '.filter-item-b',
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
    console.log("sdsd")
    return setFilterKey(key)
  }
  

  const colorDict = {
    '#84D8F6': 'white',
    '#EE4B4B': 'white'
  }

  useEffect(() => {
    setFilterKey(()=> dasarDict[dasar])
  }, [dasar])

  return (
    <div className='section' >
      <p>{dasarDict[dasar]}</p>
    <div className='playground-container filter-container-b ' >
      {
        data.map(({color, year,  program, status, location, name})=> {
          let kelas = `filter-item-b ${program} ${status} y${year} ${location}`
          return (
            <div key={name} className={kelas} >
              <div className='box' style={{ background: color, color: colorDict[color] }} >
                <p style={{ fontSize : 10 }} >{status} {year} {location} </p>
                <img src="https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png" width="30" alt="" />
              </div>
            </div>
          )
        })
      }
    </div>

    </div>
  )
}

export default Section