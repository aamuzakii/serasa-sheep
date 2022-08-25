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

  const lorem = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33'


  return (
    <div className='container journal' style={{ background: 'white', alignItems: 'flex-start' }} >
      <div className="bemper-kiri" >
        <img src='https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp' alt="" />
        <p>{lorem}</p>
      </div>
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