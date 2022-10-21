import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import $ from 'jquery'
import middleware from '../helper/middleware'
import {useQuery} from '@apollo/client'
import {GET_ABOUT_PAGE} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'

const Zepto = () => {
  let {loading, error, data, refetch} = useQuery(GET_ABOUT_PAGE, {
    fetchPolicy: 'network-only',
    variables: {staticSysId: '7xr37H6HNyz32EhhYCb9kZ'},
  })
  const [richText, setRichText] = useState('')

  useEffect(() => {
    if (localStorage.getItem('prev_page') === 'non-zepto') {
      window.location.reload(false)
    }

    middleware('zepto')
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  const img1 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EXT_q37luw.webp'
  const img2 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271840/EXT_2_tl1u2x.webp'
  const img3 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EKSTERIOR_3_osjfxg.webp'
  const kafi = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666357683/serasa/kafi_tunt2r.jpg'
  const muzammil = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666357887/serasa/muza_zw5l0v.jpg'
  const andra = 'https://manual.co.id/wp-content/uploads/2016/02/Andra-Matin-Interview-15.jpg'
  const gub = 'https://kontraktorsyariah.com/wp-content/uploads/2019/03/60d4a696e54874696919268053484836-575x800.jpg'
  const budi = 'https://ladrianarchitects.files.wordpress.com/2017/01/bp.jpg?w=662'

  let arr = [andra, img2, budi, muzammil, img1, gub, img3, img1, budi, img2, img3, kafi]

  useEffect(() => {
    // middleware('zepto')
    var currentImg = undefined,
      currentImgProps = {x: 0, y: 0},
      isZooming = false,
      column = -1,
      mouse = {x: 0, y: 0},
      delayedPlay

    for (var i = 0; i < 12; i++) {
      if (i % 4 == 0) column++

      var b = document.createElement('div')
      $('.mainBoxes').append(b)

      gsap.set(b, {
        attr: {id: 'b' + i, class: 'photoBox pb-col' + column},
        backgroundImage: `url(${arr[i]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        x: [60, 280, 500][column],
        width: 400,
        height: 640,
        borderRadius: 20,
        scale: 0.5,
        zIndex: 1,
      })

      b.tl = gsap
        .timeline({paused: true, repeat: -1})
        .fromTo(b, {y: [-575, 800, 800][column], rotation: -0.05}, {duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none'})
        .progress((i % 4) / 4)
    }

    function pauseBoxes(b) {
      var classStr = 'pb-col0'
      if ($(b).hasClass('pb-col1')) classStr = 'pb-col1'
      if ($(b).hasClass('pb-col2')) classStr = 'pb-col2'
      for (var i = 0; i < $('.mainBoxes').children().length; i++) {
        var b = $('.mainBoxes').children()[i]
        if ($(b).hasClass(classStr)) gsap.to(b.tl, {timeScale: 0, ease: 'sine'})
      }
    }

    function playBoxes() {
      for (var i = 0; i < $('.mainBoxes').children().length; i++) {
        var tl = $('.mainBoxes').children()[i].tl
        tl.play()
        gsap.to(tl, {duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true})
      }
    }

    window.onload = function () {
      var _tl = gsap
        .timeline({onStart: playBoxes})
        .set('.main', {perspective: 800})
        .set('.photoBox', {opacity: 1, cursor: 'pointer'})
        .set('.mainBoxes', {
          left: '75%',
          xPercent: -50,
          width: 1200,
          rotationX: 14,
          rotationY: -15,
          rotationZ: 10,
        })
        .set('.mainClose', {
          autoAlpha: 0,
          width: 60,
          height: 60,
          left: -30,
          top: -31,
          pointerEvents: 'none',
        })
        .fromTo('.main', {autoAlpha: 0}, {duration: 0.6, ease: 'power2.inOut', autoAlpha: 1}, 0.2)

      $('.photoBox').on('mouseenter', function (e) {
        if (currentImg) return
        if (delayedPlay) delayedPlay.kill()
        pauseBoxes(e.currentTarget)
        var _t = e.currentTarget
        gsap.to('.photoBox', {
          duration: 0.2,
          overwrite: 'auto',
          opacity: function (i, t) {
            return t == _t ? 1 : 0.33
          },
        })
        gsap.fromTo(_t, {zIndex: 100}, {duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3'})
      })

      $('.photoBox').on('mouseleave', function (e) {
        if (currentImg) return
        var _t = e.currentTarget

        if (gsap.getProperty(_t, 'scale') > 0.62) delayedPlay = gsap.delayedCall(0.3, playBoxes) // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
        else playBoxes()

        gsap.timeline().set(_t, {zIndex: 1}).to(_t, {duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo'}, 0).to('.photoBox', {duration: 0.5, opacity: 1, ease: 'power2.inOut'}, 0)
      })

      $('.photoBox').on('click', function (e) {
        if (!isZooming) {
          //only tween if photoBox isn't currently zooming

          isZooming = true
          gsap.delayedCall(0.8, function () {
            isZooming = false
          })

          if (currentImg) {
            gsap
              .timeline({defaults: {ease: 'expo.inOut'}})
              .to('.mainClose', {duration: 0.1, autoAlpha: 0, overwrite: true}, 0)
              .to('.mainBoxes', {duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true}, 0)
              .to('.photoBox', {duration: 0.6, opacity: 1, ease: 'power4.inOut'}, 0)
              .to(currentImg, {duration: 0.6, width: 400, height: 640, borderRadius: 20, x: currentImgProps.x, y: currentImgProps.y, scale: 0.5, rotation: 0, zIndex: 1}, 0)
            // .add(playBoxes, 0.8)
            currentImg = undefined
          } else {
            pauseBoxes(e.currentTarget)

            currentImg = e.currentTarget
            currentImgProps.x = gsap.getProperty(currentImg, 'x')
            currentImgProps.y = gsap.getProperty(currentImg, 'y')

            gsap
              .timeline({defaults: {duration: 0.6, ease: 'expo.inOut'}})
              .set(currentImg, {zIndex: 100})
              .fromTo('.mainClose', {x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)'}, {autoAlpha: 1, duration: 0.3, ease: 'power3.inOut'}, 0)
              .to('.photoBox', {opacity: 0}, 0)
              .to(currentImg, {width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1}, 0)
              .to('.mainBoxes', {duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0}, 0.15)
              .to('.mainBoxes', {duration: 5, scale: 1.06, rotation: 0.05, ease: 'none'}, 0.65)
          }
        }
      })

      if (!!('ontouchstart' in window)) {
        mouse.x = window.innerWidth - 50
        mouse.y = 60
      } else {
        $('.main').on('mousemove', function (e) {
          mouse.x = e.x
          mouse.y = e.layerY
          if (currentImg) gsap.to('.mainClose', {duration: 0.1, x: mouse.x, y: mouse.y, overwrite: 'auto'})
        })
      }
    }
  }, [])
  return (
    <div className="main">
      <div className="annn">
        <Markup content={richText} />
      </div>
      <div className="mainBoxes fs"></div>
      <div className="mainClose">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" fill="none">
          <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
          <path d="M15,16L45,46 M45,16L15,46" stroke="#000" strokeWidth="3.5" opacity="0.5" />
          <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

export default Zepto
