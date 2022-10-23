import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NavList2 from './NavList2'
import middleware from '../helper/middleware'
import {Markup} from 'interweave'

let v1 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243857/serasa/videos/1_cgn_mmcsor.mp4'

const img1 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EXT_q37luw.webp'
const img2 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271840/EXT_2_tl1u2x.webp'
const img3 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EKSTERIOR_3_osjfxg.webp'

const ProjectParallax = ({arr, richText}) => {
  useEffect(() => {
    middleware('project-parallax')
  }, [])

  const scrollGifHeight = 100
  const topNavHeight = 60
  const docHeight = document.documentElement.clientHeight
  const docWidth = document.documentElement.clientWidth
  const assumedVideoRatio = 488 / 638
  const maxWidthInVW = 45 / 100

  useEffect(() => {
    window.scrollTo(0, 300) // workaround
    // stagger = jarak satu dgn lainnya
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.layer-story-box',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '3000px',
      },
    })
    tl.from('.layer-story-content-wrapper', {y: 20, autoAlpha: 0, stagger: 1.4}, 0).to(
      '.layer-story-content-wrapper',
      {
        y: 0,
        autoAlpha: 0,
        stagger: 1.4,
      },
      0.9,
    )

    setTimeout(() => {
      let array = document.getElementsByTagName('span')[0].childNodes
      console.log(array[0])
      for (let i = 0; i < array.length; i++) {
        const p = array[i]
        if (p.children[0]) {
          p.style.margin = '0 0 0.5em 0'
        } else {
          p.style.margin = '0 0 1em 0'
        }
      }
    }, 200)
  }, [])

  return (
    <div className="container_project_parallax">
      <section className="layer-story-box">
        <div className="intro"></div>
        <div className="layer-story-pinned-content">
          <NavList2></NavList2>
          <div className="woy_scroll">
            <img className="woy_scroll_2" src="https://www.golfclubmadesimo.com/images/scroll-down.gif" alt="" />
          </div>
          <div className="layer-story-image-wrapper">
            <figure className="image_container layer-story-image markup_wrapper" id="layer-1">
              <Markup content={richText} />
            </figure>
          </div>
          {arr.map(({url}, i) => {
            const isVideo = url.split('.')[0] === 'https://videos'
            setTimeout(() => {
              let currentWrapper = document.getElementsByClassName('layer-story-content-wrapper')[i]
              let imgEl
              let currentH
              if (currentWrapper) {
                imgEl = currentWrapper.children[0]
                if (isVideo) {
                  currentH = docWidth * maxWidthInVW * assumedVideoRatio
                } else {
                  currentH = imgEl.clientHeight
                }
                let topMarginNeeded = (docHeight - topNavHeight - scrollGifHeight - currentH) / 2
                imgEl.style.top = `${topMarginNeeded}px`
              }
            }, 200)

            if (isVideo) {
              return (
                <div key={i} className="layer-story-content-wrapper">
                  <video loop muted autoPlay>
                    <source src={v1} type="video/mp4" />
                  </video>
                </div>
              )
            } else {
              return (
                <div key={i} className="layer-story-content-wrapper">
                  <img src={url} alt="" />
                </div>
              )
            }
          })}
        </div>
      </section>
    </div>
  )
}

export default ProjectParallax
