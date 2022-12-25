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
    if (isDesktopOrLaptop || isBigScreen) {
      backgroundRef.current.style.top = desktop
    } else if (isTabletOrMobile) {
      backgroundRef.current.style.top = mobile
    }
  }

  useEffect(() => {
    var i = 0
    var k = 0
    var m = 0
    var n = 0
    var innerString1 = 'Bring The Nature Get Closer in Your Home'
    var innerString2 = 'We Convince The Building Performance through Thermal Simulation'
    var innerString3 = 'To Create a Convert Space and Less Energy Consumption'
    var innerString4 = 'The Serenity through Biophilic and Artistic Spaces'
    var speed = 80

    function typeWriter1() {
      const text1 = document.getElementById('txt1')
      if (i < innerString1.length) {
        text1.innerHTML += innerString1.charAt(i)
        i++
        setTimeout(typeWriter1, speed)
      } else {
        setTimeout(() => {
          text1.style.display = 'none'
        }, 4000)
      }
      text1.style.transform = 'scale(0.7)'
    }
    function typeWriter2() {
      const txtDOM = document.getElementById('txt2')
      if (k < innerString2.length) {
        txtDOM.innerHTML += innerString2.charAt(k)
        k++
        setTimeout(typeWriter2, speed)
      } else {
        setTimeout(() => {
          txtDOM.style.display = 'none'
        }, 2000)
      }
      txtDOM.style.transform = 'scale(0.7)'
    }
    function typeWriter3() {
      const txtDOM = document.getElementById('txt3')
      if (m < innerString3.length) {
        txtDOM.innerHTML += innerString3.charAt(m)
        m++
        setTimeout(typeWriter3, speed)
      } else {
        setTimeout(() => {
          txtDOM.style.display = 'none'
        }, 2000)
      }
      txtDOM.style.transform = 'scale(0.7)'
    }

    function typeWriter4() {
      const txtDOM = document.getElementById('txt4')
      if (n < innerString4.length) {
        txtDOM.innerHTML += innerString4.charAt(n)
        n++
        setTimeout(typeWriter4, speed)
      } else {
        setTimeout(() => {
          txtDOM.style.display = 'none'
        }, 2000)
      }
      txtDOM.style.transform = 'scale(0.7)'
    }

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
      typeWriter4()
    }

    const playV3 = () => {
      source.setAttribute('src', v3)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV4)
      video.removeEventListener('ended', playV3)
      getVerticalAlignment('-280px', '0')
      typeWriter3()
    }

    const playV2 = () => {
      source.setAttribute('src', v2)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV3)
      video.removeEventListener('ended', playV2)
      getVerticalAlignment('-500px', '0')
      typeWriter2()
    }

    const playV1 = () => {
      source.setAttribute('src', v1)
      source.setAttribute('type', 'video/mp4')
      video.load()
      video.play()

      video.addEventListener('ended', playV2)
      video.removeEventListener('ended', playV1)
      getVerticalAlignment('-200px', '0')
      typeWriter1()
    }

    playV1()
  }, [])

  useEffect(() => {
    middleware('hall-video')
  }, [])

  return (
    <div className="fullscreen-bg" ref={backgroundRef}>
      <p className="ooo" id="txt1"></p>
      <p className="ooo" id="txt2" style={{color: 'black'}}></p>
      <p className="ooo" id="txt3"></p>
      <p className="ooo" id="txt4"></p>
      <video muted autoPlay className="fullscreen-bg__video" id="root_video" ref={videoRef}>
        <source type="video/mp4" />
      </video>
    </div>
  )
}

export default HallVideo
