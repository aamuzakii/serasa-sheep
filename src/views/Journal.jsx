import React from 'react'


function Journal() {

  const data = [
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
    {
      name: 'GA House Exhibition',
      date: 'March - May 2014'
    },
  ]

  const left = data.filter((_, i)=> (i % 2 === 0))
  const right = data.filter((_, i)=> (i % 2 !== 0))

  return (
    <div className='container journal' style={{ background: 'white', alignItems: 'flex-start' }} >
      <div style={{ width: '30%' }} className="bemper-kiri" ></div>
      <div className='big-table' >
        <div className="left" >
          {
            left.map(({name, date}, i)=>(
              <div key={i} className='cursor-pointer bubble' style={{ display: 'cell' }} >
                <p style={{ margin: '0 0 10px 0' }}>{name}<br/><span className='text-sm' >{date}</span></p>
              </div>
            ))  
          }
        </div>
        <div className="right" >
          {
            right.map(({name, date}, i)=>(
              <div key={i} className='cursor-pointer bubble' style={{ display: 'cell' }} >
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