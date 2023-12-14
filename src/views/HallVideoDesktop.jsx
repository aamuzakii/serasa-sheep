import React, {useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import middleware from '../helper/middleware'

let v1 = 'https://res.cloudinary.com/dyfzfakux/video/upload/v1672182388/serasa/halloffame/desktop/1_cuo9y5.mp4'
let v2 = 'https://res.cloudinary.com/dyfzfakux/video/upload/v1672182357/serasa/halloffame/desktop/2_trgtps.mp4'
let v3 = 'https://res.cloudinary.com/dyfzfakux/video/upload/v1672182387/serasa/halloffame/desktop/3_tckeff.mp4'
let v4 = ''
let v5 = 'https://res.cloudinary.com/dyfzfakux/video/upload/v1672182368/serasa/halloffame/desktop/5_fmksav.mp4'
let imgURL = 'https://res.cloudinary.com/dyfzfakux/image/upload/v1672182359/serasa/halloffame/desktop/4_axxznd.jpg'

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
    var imgCount = 0

    var innerString1 = 'Bring The Nature Get Closer in Your Home'
    var innerString2 = 'We Convince The Building Performance through Thermal Simulation'
    var innerString3 = 'To Create a Convert Space and Less Energy Consumption'
    var innerStringLast = 'The Serenity through Biophilic and Artistic Spaces'
    var innerStringImg = 'Micro Bioclimatic House for Your Limitation'
    var speed = 65

    const txtDOM7 = document.getElementById('txt7')
    const txtDOM1 = document.getElementById('txt1')
    const txtDOM2 = document.getElementById('txt2')
    const txtDOM3 = document.getElementById('txt3')
    const txtDOMLast = document.getElementById('txt4')

    function typeWriter1() {
      txtDOM1.style.display = 'block'
      if (i < innerString1.length) {
        txtDOM1.innerHTML += innerString1.charAt(i)
        i++
        setTimeout(typeWriter1, speed)
      } else {
        setTimeout(() => {
          txtDOM1.style.display = 'none'
          txtDOM1.innerHTML = ''
          i = 0
        }, 13000)
      }
      txtDOM1.style.transform = 'scale(0.7)'
    }
    function typeWriter2() {
      txtDOM2.style.display = 'block'
      if (k < innerString2.length) {
        txtDOM2.innerHTML += innerString2.charAt(k)
        k++
        setTimeout(typeWriter2, speed)
      } else {
        setTimeout(() => {
          txtDOM2.style.display = 'none'
          txtDOM2.innerHTML = ''
          k = 0
        }, 3000)
      }
      txtDOM2.style.transform = 'scale(0.7)'
    }
    function typeWriter3() {
      txtDOM3.style.display = 'block'
      if (m < innerString3.length) {
        txtDOM3.innerHTML += innerString3.charAt(m)
        m++
        setTimeout(typeWriter3, speed)
      } else {
        setTimeout(() => {
          txtDOM3.style.display = 'none'
          txtDOM3.innerHTML = ''
          m = 0
        }, 7000)
      }
      txtDOM3.style.transform = 'scale(0.7)'
    }

    function typeWriterLast() {
      txtDOMLast.style.display = 'block'
      if (n < innerStringLast.length) {
        txtDOMLast.innerHTML += innerStringLast.charAt(n)
        n++
        setTimeout(typeWriterLast, speed)
      } else {
        setTimeout(() => {
          txtDOMLast.style.display = 'none'
          txtDOMLast.innerHTML = ''
          n = 0
        }, 7000)
      }
      txtDOMLast.style.transform = 'scale(0.7)'
    }

    function typeWriter7() {
      txtDOM7.style.display = 'block'
      if (imgCount < innerStringImg.length) {
        txtDOM7.innerHTML += innerStringImg.charAt(imgCount)
        imgCount++
        setTimeout(typeWriter7, speed)
      } else {
        setTimeout(() => {
          txtDOM7.style.display = 'none'
          txtDOM7.innerHTML = ''
          imgCount = 0
        }, 5000)
      }
      txtDOM7.style.transform = 'scale(0.7)'
    }

    let video = document.getElementById('root_video')
    let source = video.children[0]
    const img = document.getElementById('image')

    const playLast = () => {
      source.setAttribute('src', v4)
      video.load()
      video.play()
      video.addEventListener('ended', playV1)
      video.removeEventListener('ended', playLast)
      getVerticalAlignment('-100px', '0')
      typeWriterLast()
    }

    const playV3 = () => {
      video.style.left = 'unset' // ini buat netralin ini (balikin styling)
      video.style.width = '100%' // ini buat netralin ini (balikin styling)

      source.setAttribute('src', v3)
      video.load()
      video.play()
      video.style.opacity = 'unset'

      video.addEventListener('ended', playImg)
      video.removeEventListener('ended', playV3)

      if (isTabletOrMobile) {
        video.style.transform = 'scale(1.3) translateY(40px)'
      }

      getVerticalAlignment('-280px', '0')
      typeWriter3()
    }

    const playV2 = () => {
      source.setAttribute('src', v2)
      video.load()
      video.play()
      video.style.left = '30vw' // ini buat netralin ini (balikin styling)
      video.style.width = 'unset' // ini buat netralin ini (balikin styling)

      video.addEventListener('ended', playV3)
      video.removeEventListener('ended', playV2)
      getVerticalAlignment('-500px', '0')
      typeWriter2()
    }

    const playV1 = () => {
      source.setAttribute('src', v1)
      video.load()
      video.play()

      video.addEventListener('ended', playV2)
      video.removeEventListener('ended', playV1)

      if (isTabletOrMobile) {
        video.style.transform = 'scale(1.3) translateY(-70px)'
      }

      getVerticalAlignment('-200px', '0')
      typeWriter1()
    }

    const playImg = () => {
      if (isTabletOrMobile) {
        txtDOM7.style.top = '350px'
      }
      video.style.display = 'none'
      img.style.display = 'block'
      getVerticalAlignment('-100px', '0')
      typeWriter7()
      setTimeout(() => {
        txtDOM7.style.display = 'none'
        img.style.display = 'none'
        video.style.display = 'block'
        video.removeEventListener('ended', playImg)
        playLast()
      }, 10000)
    }

    playV1()

    const onblur = () => {
      hideText()
    }

    const onfocus = () => {
      hideText()
      window.location.reload()
    }

    middleware('hall-video')
    window.onblur = onblur
    window.onfocus = onfocus

    const hideText = () => {
      txtDOM1.style.opacity = '0'
      txtDOM2.style.opacity = '0'
      txtDOM3.style.opacity = '0'
      txtDOMLast.style.opacity = '0'
      txtDOM7.style.opacity = '0'
    }
  }, [])

  return (
    <div className="fullscreen-bg" ref={backgroundRef}>
      <p className="running_text" id="txt1"></p>
      <p className="running_text" id="txt2" style={{color: 'black', right: '50vw'}}></p>
      <p className="running_text" id="txt3"></p>
      <p className="running_text" id="txt4"></p>
      <p className="running_text" id="txt7" style={{color: 'black', top: '20vh', right: '50vw'}}></p>
      <video muted autoPlay id="root_video" ref={videoRef}>
        <source type="video/mp4" />
      </video>
      <img src={imgURL} alt="" className="image_hall" id="image" style={{display: 'none'}} />
    </div>
  )
}

export default HallVideo
