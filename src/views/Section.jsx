import React, { useEffect } from 'react'
import Isotope from 'isotope-layout'

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

  let container = 'filter-container' + code
  let dotContainer = '.filter-container' + code
  let item = 'filter-item' + code
  let dotItem = '.filter-item' + code

  console.log(container)
  console.log(dotContainer)
  console.log(item)
  console.log(dasar)

  

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

  let c = `playground-container ${container}`
  console.log(c)

  return (
    <div className='section' >
      <p>{dasarDict[dasar]}</p>
    <div className='playground-container filter-containera' >
      {
        data.map(({color, year,  program, status, location, name})=> {
          let kelas = `${item} ${program} ${status} y${year} ${location}`
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