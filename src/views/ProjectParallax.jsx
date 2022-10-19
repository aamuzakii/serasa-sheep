import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
let v1 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243857/serasa/videos/1_cgn_mmcsor.mp4'

const img1 = 'https://images.ctfassets.net/0wvobgztd3t0/6yXkjQz8nsoifdm6u0mhAe/de04fd7b5f6bc98fbdbca1db9933172b/EXT.jpeg'
const img2 = 'https://images.ctfassets.net/0wvobgztd3t0/MU7nC40YGJRUJlXt5z3pR/eb40e2f35a755670942e876b5041fdcf/EXT_2.jpeg'
const img3 = 'https://images.ctfassets.net/0wvobgztd3t0/8Ns0naryVuEwOvE6ZZTFG/675d15300d515c952aab68f2121e1047/EKSTERIOR_3.jpeg'

const ProjectParallax = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.layer-story-box',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '3000px',
        markers: true,
      },
    })
    tl.from('.layer-story-content-wrapper', {y: 20, autoAlpha: 0, stagger: 1.5}, 0).to(
      '.layer-story-content-wrapper',
      {
        y: 0,
        autoAlpha: 0,
        stagger: 1.5,
      },
      0.9,
    )
  }, [])

  return (
    <div className="container">
      <section className="layer-story-box">
        <div className="intro"></div>
        <div className="layer-story-pinned-content">
          <div className="woy_scroll">
            <img className="woy_scroll_2" src="https://www.golfclubmadesimo.com/images/scroll-down.gif" alt="" />
          </div>
          <div className="layer-story-image-wrapper">
            <figure className="image_container layer-story-image" id="layer-1">
              <p>
                Bismillah PREFACE CGN House terletak di tengah tanah kavling yang masih kosong. Cilegon layaknya kota-kota besar di Indonesia mempunyai temperatur yang cukup tinggi dari tengah hingga petang hari. Form Fasad depan yang menghadap barat di dominasi dengan permukaan solid dan kantilever pada massa lantai atas untuk mencegah panas masuk ke dalam bangunan dari tengah hingga petang hari. Sisi Timur (Belakang) bangunan diletakan sebuah courtyard untuk menjadi sumber cahaya di pagi hari dan penghawaan alami pada bangunan. Surface Temperature Tantangan site yang berada di lahan kosong adalah cahaya matahari dapat langsung mendarat di selubung bangunan. Simulasi sepanjang hari (05.00-19.00) dilakukan untuk melihat bagaimana paparan radiasi matahari yang akan jatuh ke selubung bangunan yang selanjutnya berguna untuk melakukan analisa lanjutan kenyamanan thermal dan menentukan strategi pasif yang akan diterapkan pada bangunan. Thermal Comfort Potensi kecepatan udara yang cukup
                tinggi pada site dimaksimalkan untuk membantu mencapai kenyamanan thermal pada bangunan. Hampir seluruh ruangan pada lantai 2 dibuat plafon miring mengikuti bentuk atap guna menciptakan volume udara yang besar pada ruangan. Untuk mencapai standar kenyamanan thermal Ashrae setidaknya ada 3 strategi utama yang diterapkan pada bangunan : Pembesaran volume ruangan melalui peninggian plafon, Cross Air Ventilation pada seluruh ruangan dengan okupansi tinggi dan Penerapan Ceiling Fan yang hanya mulai beroperasi pada periode panas (jam 12-17). Principal : @kafipangestu Team : @fazlysuper Vis : @edodarm Building Physics : @hale_lab @serasa.architect #biohouse #serasaarchitect #biohouse #biophilic #pandemi #housedesign #architecture #greenhouse #greenbuilding #sustainabledesign #architecturevisualization #architecturediagram #environmentaldesign #passivedesign #buildingperformance #buildingsimulation #buildingphysics #energymodeling
              </p>
            </figure>
          </div>
          <div className="layer-story-content-wrapper" id="layer-1">
            <img src={img1} alt="" />
          </div>

          <div className="layer-story-content-wrapper" id="layer-2">
            <img src={img2} alt="" />
          </div>
          <div className="layer-story-content-wrapper" id="layer-3">
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
      <section className="last">
        <video muted autoPlay className="fullscreen-bg__video">
          <source src={v1} type="video/mp4" />
        </video>
      </section>
    </div>
  )
}

export default ProjectParallax
