import React, {useState, useEffect} from 'react'

function Projects() {



  const [sort, setSort] = useState('year')

  const handleClick = (e) => {
    const type = (e.target.innerText)
    setSort(()=> type)
  }

  function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
  }

  useEffect(() => {
  }, [])
  

  useEffect(() => {
    const y = 0
    let st = 0
    let nd = 500
    let rd = 1000 // ujung paling jauh
    let th = 0
    switch (sort) {
      case 'program':
        const urban = (document.querySelectorAll(".urban"))
        const housing = (document.querySelectorAll(".housing"))
        addAttr(urban, st, 0, null)
        addAttr(housing, rd, 0, null)
        break;
      case 'year':
        let arrOfYear = ["2021", "2022"]
        arrOfYear.forEach((el, i) => {
          addAttr(document.querySelectorAll(`.y${el}`), i * 500, 0, null)
        });
        break;
      case 'status':
        const idea = (document.querySelectorAll(".idea"))
        const op = (document.querySelectorAll(".on-progress"))
        const completed = (document.querySelectorAll(".completed"))
        addAttr(idea, st, 0, null)
        addAttr(op, nd, 0, null)
        addAttr(completed, rd, 0, null)
        break;
      case 'location':
        const bogor = (document.querySelectorAll(".Bogor"))
        const jakarta = (document.querySelectorAll(".Jakarta"))
        addAttr(bogor, st, 0, null)
        addAttr(jakarta, rd, 0, null)
        break;
      default:
        alert("error switch")
    }
  }, [sort])

  const addAttr = (elements, x, y, prevStyle) => {
    if (!elements) return
    elements.forEach((el, i) => {
      let a = 500-i*50
      el.style.transform = `translate(${x}px, ${a}px)`
    });
  }
  



  return (
    <div className='container projects' >
      <div className='playground-container'>
      <h4>{sort}</h4>
        {
          data.map(({color, year,  program, status, location, name})=> {
            let kelas = `box ${program} ${status} y${year} ${location}`
            return (
              <div key={name} className={kelas} style={{ background: color }} />
            )
          })
        }
      </div>
      <div className='flex-row' >
        <h1 className='sorting-btn' onClick={handleClick} >chronology</h1>
        <h1 className='sorting-btn' onClick={handleClick} >status</h1>
        <h1 className='sorting-btn' onClick={handleClick} >location</h1>
        <h1 className='sorting-btn' onClick={handleClick} >program</h1>
        <h1 className='sorting-btn' onClick={handleClick} >year</h1>
      </div>
    </div>
  )
}

export default Projects