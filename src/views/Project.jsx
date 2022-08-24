import React from 'react'

function Project() {

  const imgList = [
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg',
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp',
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp'
  ]



  return (
    <div className='container project-single' >
      <div className='left' >lorem</div>
      <div className='img-container' >
        {
          imgList.map((image_link, i)=> (
            <img className='single-img' src={image_link} alt="" />
          ))
        }
      </div>
      
    </div>
  )
}

export default Project