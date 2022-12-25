import React, {useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import middleware from '../helper/middleware'

let v1 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1671965299/serasa/videos/1_hatyol.mp4'
let v2 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1671956568/serasa/videos/2_zfmicp.mp4'
let v3 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1671965301/serasa/videos/3_eomjwo.mp4'
let v4 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1671956580/serasa/videos/4_vblhg4.jpg'
let v5 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1671956584/serasa/videos/5_dba5tq.mp4'

v4 = v5

function HallVideo() {
  // Note: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.
  const videoRef = useRef('')
  const backgroundRef = useRef('')

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({query: '(min-width: 1824px)'})
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

  const getVerticalAlignment = (desktop, mobile) => {
    console.log('masuk:', desktop)
    if (isDesktopOrLaptop || isBigScreen) {
      backgroundRef.current.style.top = desktop
    } else if (isTabletOrMobile) {
      backgroundRef.current.style.top = mobile
    }
  }

  useEffect(() => {
    var i = 0
    var txt = 'Bring The Nature Get Closer in Your Home'
    var speed = 80

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById('demo').innerHTML += txt.charAt(i)
        i++
        setTimeout(typeWriter, speed)
      }
      document.getElementById('demo').style.transform = 'scale(0.7)'
    }
    typeWriter()

    let video = document.getElementById('root_video')
    let source = video.children[0]

    const playV4 = () => {
      source.setAttribute('src', v4)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()
      video.addEventListener('ended', playV1)
      video.removeEventListener('ended', playV4)
      getVerticalAlignment('-100px', '0')
    }

    const playV3 = () => {
      source.setAttribute('src', v3)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV4)
      video.removeEventListener('ended', playV3)
      getVerticalAlignment('-280px', '0')
    }

    const playV2 = () => {
      source.setAttribute('src', v2)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV3)
      video.removeEventListener('ended', playV2)
      getVerticalAlignment('-500px', '0')
    }

    const playV1 = () => {
      source.setAttribute('src', v1)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV2)
      video.removeEventListener('ended', playV1)
      getVerticalAlignment('-200px', '0')
    }

    playV1()
  }, [])

  useEffect(() => {
    middleware('hall-video')
  }, [])

  return (
    <div className="fullscreen-bg" ref={backgroundRef}>
      <p className="ooo" id="demo"></p>
      <video muted autoPlay className="fullscreen-bg__video" id="root_video" ref={videoRef}>
        <source src={v1} type="video/mp4" />
      </video>
    </div>
  )
}

export default HallVideo
