import React, {useEffect, useState} from 'react'

const Image = ({link, className, src, size}) => {
  const [resizedImage, setResizedImage] = useState('../../images/blank.png')
  useEffect(() => {
    const cacheDurationDay = 30

    const server = 'https://sharp-server.vercel.app'
    // const server = 'http://localhost:3000'

    const resizeImage = async () => {
      try {
        const response = await fetch(`${server}/api/resize?link=${link || src}&size=${size}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': `max-age=${cacheDurationDay}*24*60*60`, // 3 hari
          },
        })

        if (response.ok) {
          const blob = await response.blob()
          setResizedImage(URL.createObjectURL(blob))
        } else {
          console.error('Failed to resize image')
        }
      } catch (error) {
        console.error('Error while resizing image:', error)
      }
    }

    resizeImage() // Call the async function immediately
  }, [])

  return <img className={className} src={resizedImage} alt="image" />
}

export default Image
