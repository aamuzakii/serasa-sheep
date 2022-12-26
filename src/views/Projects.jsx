import React, {useEffect} from 'react'
import Section from '../components/Section'
import {Link, Outlet} from 'react-router-dom'
import middleware from '../helper/middleware'

function Projects() {
  const [dasar, setDasar] = React.useState('all')

  useEffect(() => {
    middleware('foo')
  }, [])

  useEffect(() => {
    // BEWARE
    let x = document.getElementsByClassName('playground-container')[0]
    let screenWidth = document.body.clientWidth

    x.style.paddingLeft = 0 + 'px'
    x.style.paddingRight = 0 + 'px'

    if (screenWidth > 500) {
      let cc
      if (dasar === 'location' && screenWidth > 1600) {
        cc = (screenWidth % 260) / 2 - 10
        cc = cc + 260
      } else {
        cc = (screenWidth % 260) / 2 - 10
      }

      x.style.paddingLeft = cc + 'px'
      x.style.paddingRight = cc + 'px'
    }
  }, [dasar])

  const isotope = React.useRef()
  // store the filter keyword in a state

  // handling filter key change

  const changeDasar = (key) => (e) => {
    document.querySelectorAll('.sorting-btn').forEach((element) => {
      element.classList.remove('actived')
    })

    e.target.classList.add('actived')
    return setDasar((_) => key)
  }

  let year = ['y2021', 'y2022', 'y2023']
  let location = ['bogor', 'depok', 'cilegon', 'madiun', 'serang']
  let status = ['idea', 'completed']
  let projectType = ['residential', 'commercial', 'educational', 'public_space', 'others']

  let dasarDict0
  let dasarDict1
  let dasarDict2
  let dasarDict3
  let dasarDict4

  for (let i = 0; i < location.length; i++) {
    let content = {
      year: year[i],
      location: location[i],
      status: status[i],
      projectType: projectType[i],
    }
    eval('dasarDict' + i + ' = ' + JSON.stringify(content))
  }

  return (
    <div className="container projects">
      <h1 className="font-gede-banget" style={{textAlign: 'center'}}>
        Our Projects
      </h1>

      <div className="flex-row sorting-btn-container">
        <div className=" flex-row inner-container-button">
          {/* <div className='sorting-btn' onClick={changeDasar('status')} >Status</div> */}
          <div className="sorting-btn" onClick={changeDasar('all')}>
            All
          </div>
          <div className="sorting-btn" onClick={changeDasar('projectType')}>
            Project Type
          </div>
          <div className="sorting-btn" onClick={changeDasar('location')}>
            Location
          </div>
          <div className="sorting-btn" onClick={changeDasar('year')}>
            Year
          </div>
        </div>
      </div>

      <div className="playground-container">
        <Section dasar={dasar} dasarDict={dasarDict0} code={'b'}></Section>
        <Section dasar={dasar} dasarDict={dasarDict1} code={'a'}></Section>
        <Section dasar={dasar} dasarDict={dasarDict2} code={'c'}></Section>
        <Section dasar={dasar} dasarDict={dasarDict3} code={'d'}></Section>
        <Section dasar={dasar} dasarDict={dasarDict4} code={'e'}></Section>
      </div>
      <Outlet />
    </div>
  )
}

export default Projects
