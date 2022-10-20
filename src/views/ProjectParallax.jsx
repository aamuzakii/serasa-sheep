import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NavList2 from './NavList2'

let v1 = 'https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243857/serasa/videos/1_cgn_mmcsor.mp4'

const img1 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EXT_q37luw.webp'
const img2 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271840/EXT_2_tl1u2x.webp'
const img3 = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1666271841/EKSTERIOR_3_osjfxg.webp'

const ProjectParallax = () => {
  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.display = 'none'
  }, [])

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
            <figure className="image_container layer-story-image" id="layer-1">
              {/* <p>
                Bismillah PREFACE CGN House terletak di tengah tanah kavling yang masih kosong. Cilegon layaknya kota-kota besar di Indonesia mempunyai temperatur yang cukup tinggi dari tengah hingga petang hari. Form Fasad depan yang menghadap barat di dominasi dengan permukaan solid dan kantilever pada massa lantai atas untuk mencegah panas masuk ke dalam bangunan dari tengah hingga petang hari. Sisi Timur (Belakang) bangunan diletakan sebuah courtyard untuk menjadi sumber cahaya di pagi hari dan penghawaan alami pada bangunan. Surface Temperature Tantangan site yang berada di lahan kosong adalah cahaya matahari dapat langsung mendarat di selubung bangunan. Simulasi sepanjang hari (05.00-19.00) dilakukan untuk melihat bagaimana paparan radiasi matahari yang akan jatuh ke selubung bangunan yang selanjutnya berguna untuk melakukan analisa lanjutan kenyamanan thermal dan menentukan strategi pasif yang akan diterapkan pada bangunan. Thermal Comfort Potensi kecepatan udara yang cukup
                tinggi pada site dimaksimalkan untuk membantu mencapai kenyamanan thermal pada bangunan. Hampir seluruh ruangan pada lantai 2 dibuat plafon miring mengikuti bentuk atap guna menciptakan volume udara yang besar pada ruangan. Untuk mencapai standar kenyamanan thermal Ashrae setidaknya ada 3 strategi utama yang diterapkan pada bangunan : Pembesaran volume ruangan melalui peninggian plafon, Cross Air Ventilation pada seluruh ruangan dengan okupansi tinggi dan Penerapan Ceiling Fan yang hanya mulai beroperasi pada periode panas (jam 12-17). Principal : @kafipangestu Team : @fazlysuper Vis : @edodarm Building Physics : @hale_lab @serasa.architect #biohouse #serasaarchitect #biohouse #biophilic #pandemi #housedesign #architecture #greenhouse #greenbuilding #sustainabledesign #architecturevisualization #architecturediagram #environmentaldesign #passivedesign #buildingperformance #buildingsimulation #buildingphysics #energymodeling
              </p> */}
              <Mark />
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
        <video muted autoPlay className="kelas-el-video">
          <source src={v1} type="video/mp4" />
        </video>
      </section>
    </div>
  )
}

const Mark = () => (
  <div class="naon">
    <span>
      <p>Bismillah</p>
      <p></p>
      <p>
        <b>PREFACE</b>
      </p>
      <p>CGN House terletak di tengah tanah kavling yang masih kosong. Cilegon layaknya kota-kota besar di Indonesia mempunyai temperatur yang cukup tinggi dari tengah hingga petang hari.</p>
      <p>
        <b>Form</b>
      </p>
      <p>Fasad depan yang menghadap barat di dominasi dengan permukaan solid dan kantilever pada massa lantai atas untuk mencegah panas masuk ke dalam bangunan dari tengah hingga petang hari. Sisi Timur (Belakang) bangunan diletakan sebuah courtyard untuk menjadi sumber cahaya di pagi hari dan penghawaan alami pada bangunan.</p>
      <p>
        <b>Surface Temperature</b>
      </p>
      <p>Tantangan site yang berada di lahan kosong adalah cahaya matahari dapat langsung mendarat di selubung bangunan. Simulasi sepanjang hari (05.00-19.00) dilakukan untuk melihat bagaimana paparan radiasi matahari yang akan jatuh ke selubung bangunan yang selanjutnya berguna untuk melakukan analisa lanjutan kenyamanan thermal dan menentukan strategi pasif yang akan diterapkan pada bangunan.</p>
      <p>
        <b>Thermal Comfort</b>
      </p>
      <p>Potensi kecepatan udara yang cukup tinggi pada site dimaksimalkan untuk membantu mencapai kenyamanan thermal pada bangunan. Hampir seluruh ruangan pada lantai 2 dibuat plafon miring mengikuti bentuk atap guna menciptakan volume udara yang besar pada ruangan. Untuk mencapai standar kenyamanan thermal Ashrae setidaknya ada 3 strategi utama yang diterapkan pada bangunan : Pembesaran volume ruangan melalui peninggian plafon, Cross Air Ventilation pada seluruh ruangan dengan okupansi tinggi dan Penerapan Ceiling Fan yang hanya mulai beroperasi pada periode panas (jam 12-17).</p>
      <p>Principal : @kafipangestu Team : @fazlysuper Vis : @edodarm Building Physics : @hale_lab</p>
      <p>@serasa.architect #biohouse #serasaarchitect</p>
    </span>
  </div>
)

export default ProjectParallax
