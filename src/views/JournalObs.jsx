import React from 'react'
import Isotope from 'isotope-layout'

function Journal() {
  const data = [
    {
      id: 'foo',
      name: 'GA House Exhibition',
      date: 'March - May 2014',
      img_url: 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp',
      desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33',
    },
    {
      id: 'bar',
      name: 'GA House Exhibition',
      date: 'March - May 2014',
      img_url:
        'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg',
      desc: 'I currently have a css animation on my page which is triggered by :hover. I would like this to change to when the page is resized past width 700px using media queries.',
    },
  ]

  const left = data.filter((_, i) => i % 2 === 0)
  const right = data.filter((_, i) => i % 2 !== 0)

  const lorem =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33'

  const isotope = React.useRef()
  const [filterKey, setFilterKey] = React.useState('*')

  React.useEffect(() => {
    isotope.current = new Isotope('.bemper-kiri', {
      itemSelector: '.item-yaa',
      layoutMode: 'fitRows',
    })
    return () => isotope.current.destroy()
  }, [])

  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleClick = (id) => {
    setFilterKey(() => id)
  }

  React.useEffect(() => {
    setFilterKey(() => 'foo')
  }, [])

  return (
    <div className="container journal" style={{background: 'white', alignItems: 'flex-start'}}>
      <div className="bemper-kiri">
        {data.map(({desc, img_url, id}) => {
          const kelas = `item-yaa ${id}`
          return (
            <>
              <img className={kelas} src={img_url} alt="" />
              <p className={kelas}>{desc}</p>
            </>
          )
        })}
      </div>
      <div className="big-table">
        <div className="left">
          {left.map(({name, date, img_url, desc, id}, i) => (
            <div
              onClick={(_) => handleClick(id)}
              key={i}
              className="cursor-pointer bubble"
              style={{display: 'cell'}}
            >
              <p style={{margin: '0 0 10px 0'}}>
                {name}
                <br />
                <span className="text-sm">{date}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="right">
          {right.map(({name, date, img_url, desc, id}, i) => (
            <div
              onClick={(_) => handleClick(id)}
              key={i}
              className="cursor-pointer bubble"
              style={{display: 'cell'}}
            >
              <p style={{margin: '0 0 10px 0'}}>
                {name}
                <br />
                <span className="text-sm">{date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
