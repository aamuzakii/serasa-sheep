import React from 'react'
import Section from './Section'
import { Link, Outlet } from "react-router-dom";

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
  const [dasar, setDasar] = React.useState('location')


  // handling filter key change

  const changeDasar = key => (e) => {
    document.querySelectorAll(".sorting-btn").forEach(element => {
      element.classList.remove('actived');
    });

    e.target.classList.add('actived');
    return setDasar(key)
  }

  let year = ['y2021', 'y2022']
  let location = ['Bogor', 'Jakarta']
  let status = ['idea', 'completed']

  let dasarDict0
  let dasarDict1

  for (let i = 0; i < location.length; i++) {
    let content = {
      year: year[i],
      location: location[i],
      status: status[i]
    }
    eval("dasarDict" + i + " = " + JSON.stringify(content));
  }

  return (
    <div className='container projects' >
      <h1 className='font-gede-banget' style={{ textAlign: 'center' }} >Our Clients</h1>
      <div className='flex-row sorting-btn-container' >
        <div className=' flex-row inner-container-button'>
          <div className='sorting-btn' onClick={changeDasar('status')} >Status</div>
          <div className='sorting-btn' onClick={changeDasar('location')} >Location</div>
          {/* <div className='sorting-btn' onClick={changeDasar('program')} >program</div> */}
          <div className='sorting-btn' onClick={changeDasar('year')} >Year</div>
        </div>
      </div>
      
      <div className='playground-container' >
        
        <Section dasar={dasar} dasarDict={dasarDict0} code={'b'} ></Section>
        <Section dasar={dasar} dasarDict={dasarDict1} code={'a'} ></Section>
      </div>
      <Outlet />
    </div>
  )
}

export default Projects

  
