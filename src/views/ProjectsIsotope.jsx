import React from 'react'
import Isotope from 'isotope-layout'
import Section from './Section'
// import SectionB from './SectionB'

function Projects() {

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
  const [dasar, setDasar] = React.useState('location')

  // initialize an Isotope object with configs
  // React.useEffect(() => {
  //   isotope.current = new Isotope('.filter-container', {
  //     itemSelector: '.filter-item',
  //     layoutMode: 'fitRows',
  //   })
  //   return () => isotope.current.destroy()
  // }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  const colorDict = {
    '#84D8F6': 'white',
    '#EE4B4B': 'white'
  }

  const changeDasar = key => () => setDasar(key)

  let dasarDict1 = {
    year: 'y2021',
    location: 'Bogor',
    status: 'idea'
  }

  let dasarDict2 = {
    year: 'y2022',
    location: 'Jakarta',
    status: 'completed'
  }

  return (
    <div className='container projects' >
      <div className='flex-row' >
        <div className='sorting-btn' onClick={changeDasar('*')}>Show Both</div>
        <div className='sorting-btn' onClick={changeDasar('status')} >status</div>
        <div className='sorting-btn' onClick={changeDasar('location')} >location</div>
        {/* <div className='sorting-btn' onClick={changeDasar('program')} >program</div> */}
        <div className='sorting-btn' onClick={changeDasar('year')} >year</div>
      </div>
      <div className='playground-container' >
        {/* <Section dasar={dasar} dasarDict={dasarDict1} code={'a'} ></Section> */}
        {/* <Section dasar={dasar} dasarDict={dasarDict2} code={'b'} ></Section> */}
      </div>

      
    </div>
  )
}

export default Projects

  

