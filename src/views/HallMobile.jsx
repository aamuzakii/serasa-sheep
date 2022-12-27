import React, {useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import middleware from '../helper/middleware'

import one from '../assets/halloffame/1.png'
import two from '../assets/halloffame/2.png'
import three from '../assets/halloffame/3.png'
import four from '../assets/halloffame/4.jpg'
import five from '../assets/halloffame/5.png'

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
    var i1 = 0
    var i2 = 0
    var i3 = 0
    var i4 = 0
    var i5 = 0

    var innerString1 = 'Bring The Nature Get Closer in Your Home'
    var innerString2 = 'We Convince The Building Performance through Thermal Simulation'
    var innerString3 = 'To Create a Convert Space and Less Energy Consumption'
    var innerString4 = 'Micro Bioclimatic House for Your Limitation'
    var innerString5 = 'The Serenity through Biophilic and Artistic Spaces'
    var speed = 65

    const txtDOM1 = document.getElementById('txt1')
    const txtDOM2 = document.getElementById('txt2')
    const txtDOM3 = document.getElementById('txt3')
    const txtDOM4 = document.getElementById('txt4')
    const txtDOM5 = document.getElementById('txt5')

    function typeWriter1() {
      txtDOM1.style.display = 'block'
      if (i1 < innerString1.length) {
        txtDOM1.innerHTML += innerString1.charAt(i1)
        i1++
        setTimeout(typeWriter1, speed)
      } else {
        setTimeout(() => {
          txtDOM1.style.display = 'none'
          txtDOM1.innerHTML = ''
          i1 = 0
        }, 5000)
      }
      txtDOM1.style.transform = 'scale(0.7)'
    }
    function typeWriter2() {
      txtDOM2.style.display = 'block'
      if (i2 < innerString2.length) {
        txtDOM2.innerHTML += innerString2.charAt(i2)
        i2++
        setTimeout(typeWriter2, speed)
      } else {
        setTimeout(() => {
          txtDOM2.style.display = 'none'
          txtDOM2.innerHTML = ''
          i2 = 0
        }, 3000)
      }
      txtDOM2.style.transform = 'scale(0.7)'
    }
    function typeWriter3() {
      txtDOM3.style.display = 'block'
      if (i3 < innerString3.length) {
        txtDOM3.innerHTML += innerString3.charAt(i3)
        i3++
        setTimeout(typeWriter3, speed)
      } else {
        setTimeout(() => {
          txtDOM3.style.display = 'none'
          txtDOM3.innerHTML = ''
          i3 = 0
        }, 7000)
      }
      txtDOM3.style.transform = 'scale(0.7)'
    }

    function typeWriter4() {
      txtDOM4.style.display = 'block'
      if (i4 < innerString4.length) {
        txtDOM4.innerHTML += innerString4.charAt(i4)
        i4++
        setTimeout(typeWriter4, speed)
      } else {
        setTimeout(() => {
          txtDOM4.style.display = 'none'
          txtDOM4.innerHTML = ''
          i4 = 0
        }, 5000)
      }
      txtDOM4.style.transform = 'scale(0.7)'
    }

    function typeWriter5() {
      txtDOM5.style.display = 'block'
      if (i5 < innerString5.length) {
        txtDOM5.innerHTML += innerString5.charAt(i5)
        i5++
        setTimeout(typeWriter5, speed)
      } else {
        setTimeout(() => {
          txtDOM5.style.display = 'none'
          txtDOM5.innerHTML = ''
          i5 = 0
        }, 7000)
      }
      txtDOM5.style.transform = 'scale(0.7)'
    }

    const runImg1 = () => {
      let node = document.createElement('img')
      node.setAttribute('src', one)
      node.setAttribute('class', 'mobile_image_hall')
      node.setAttribute('id', 'image')

      let bg = document.getElementById('bg')
      bg.appendChild(node)
      typeWriter1()
      setTimeout(() => {
        txtDOM1.style.display = 'none'
        node.style.display = 'none'
        runImg2()
      }, 8000)
    }
    const runImg2 = () => {
      let node = document.createElement('img')
      node.setAttribute('src', two)
      node.setAttribute('class', 'mobile_image_hall')
      node.setAttribute('id', 'image')

      let bg = document.getElementById('bg')
      bg.appendChild(node)
      typeWriter2()
      setTimeout(() => {
        txtDOM2.style.display = 'none'
        node.style.display = 'none'
        runImg3()
      }, 8000)
    }

    const runImg3 = () => {
      let node = document.createElement('img')
      node.setAttribute('src', three)
      node.setAttribute('class', 'mobile_image_hall')
      node.setAttribute('id', 'image')

      let bg = document.getElementById('bg')
      bg.appendChild(node)
      typeWriter3()
      setTimeout(() => {
        txtDOM3.style.display = 'none'
        node.style.display = 'none'
        runImg4()
      }, 8000)
    }

    const runImg4 = () => {
      let node = document.createElement('img')
      node.setAttribute('src', four)
      node.setAttribute('class', 'mobile_image_hall')
      node.setAttribute('id', 'image')

      let bg = document.getElementById('bg')
      bg.appendChild(node)
      typeWriter4()
      setTimeout(() => {
        txtDOM4.style.display = 'none'
        node.style.display = 'none'
        runImg5()
      }, 8000)
    }

    const runImg5 = () => {
      let node = document.createElement('img')
      node.setAttribute('src', five)
      node.setAttribute('class', 'mobile_image_hall')
      node.setAttribute('id', 'image')

      let bg = document.getElementById('bg')
      bg.appendChild(node)
      typeWriter5()
      setTimeout(() => {
        txtDOM5.style.display = 'none'
        node.style.display = 'none'
        runImg1()
      }, 8000)
    }

    runImg1()
  }, [])

  useEffect(() => {
    function reload() {
      window.location.reload()
    }

    middleware('hall-video')
    // window.onfocus = reload
  }, [])

  return (
    <div className="fullscreen-bg" ref={backgroundRef} id="bg">
      <p className="running_text" id="txt1"></p>
      <p className="running_text" id="txt2"></p>
      <p className="running_text" id="txt3"></p>
      <p className="running_text" id="txt4"></p>
      <p className="running_text" id="txt5"></p>
    </div>
  )
}

export default HallVideo

// 412, 915
//
