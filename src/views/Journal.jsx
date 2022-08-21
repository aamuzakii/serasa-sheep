import React from 'react'


function Journal() {

  const little = {
    
  }

  const data = [
    {
      name: 'GA House Exhibitionxxxxx',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
  ]

  const left = data.filter((_, i)=> (i % 2 === 0))
  const right = data.filter((_, i)=> (i % 2 !== 0))

  return (
    <div className='container journal' style={{ background: 'white', alignItems: 'flex-start' }} >
      <div style={{ width: '30%' }} ></div>
      <div className='big-table' style={{ display: 'flex', margin: '100px 180px 0 0' }}>
        <div style={{ margin: 50, display: 'table' }} >
          {
            left.map(({name, date})=>(
              <div key={name} className='cursor-pointer bubble' style={{ display: 'cell' }} >
                <p style={{ margin: '0 0 10px 0' }}>{name}<br/><span className='text-sm' >{date}</span></p>
              </div>
            ))  
          }
        </div>
        <div style={{ margin: 50, display: 'table' }} >
          {
            right.map(({name, date})=>(
              <div key={name} className='cursor-pointer bubble' style={{ display: 'cell' }} >
                <p style={{ margin: '0 0 10px 0' }}>{name}<br/><span className='text-sm' >{date}</span></p>
              </div>
            ))  
          }
        </div>
      </div>
      
    </div>
  )
}

export default Journal