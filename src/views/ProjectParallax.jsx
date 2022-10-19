import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ProjectParallax = () => {
  const layerStoryBox = useRef(null)
  const layerStoryContentWrapper = useRef(null)
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.layer-story-box',
    //     scrub: true,
    //     pin: true,
    //     start: 'top top',
    //     end: '3000px',
    //     markers: true,
    //   },
    // })
    // tl.from('.layer-story-content-wrapper', {y: 20, autoAlpha: 0, stagger: 1.5}, 0).to(
    //   '.layer-story-content-wrapper',
    //   {
    //     y: 0,
    //     autoAlpha: 0,
    //     stagger: 1.5,
    //   },
    //   0.9,
    // )
  }, [])

  return (
    <div className="container">
      <section className="layer-story-box" ref={layerStoryBox}>
        <div className="intro"></div>
        <div className="layer-story-pinned-content">
          <div className="layer-story-image-wrapper">
            <figure className="image_container layer-story-image" id="layer-1">
              <p>
                Bismillah PREFACE CGN House terletak di tengah tanah kavling yang masih kosong.
                Cilegon layaknya kota-kota besar di Indonesia mempunyai temperatur yang cukup tinggi
                dari tengah hingga petang hari. Form Fasad depan yang menghadap barat di dominasi
                dengan permukaan solid dan kantilever pada massa lantai atas untuk mencegah panas
                masuk ke dalam bangunan dari tengah hingga petang hari. Sisi Timur (Belakang)
                bangunan diletakan sebuah courtyard untuk menjadi sumber cahaya di pagi hari dan
                penghawaan alami pada bangunan. Surface Temperature Tantangan site yang berada di
                lahan kosong adalah cahaya matahari dapat langsung mendarat di selubung bangunan.
                Simulasi sepanjang hari (05.00-19.00) dilakukan untuk melihat bagaimana paparan
                radiasi matahari yang akan jatuh ke selubung bangunan yang selanjutnya berguna untuk
                melakukan analisa lanjutan kenyamanan thermal dan menentukan strategi pasif yang
                akan diterapkan pada bangunan. Thermal Comfort Potensi kecepatan udara yang cukup
                tinggi pada site dimaksimalkan untuk membantu mencapai kenyamanan thermal pada
                bangunan. Hampir seluruh ruangan pada lantai 2 dibuat plafon miring mengikuti bentuk
                atap guna menciptakan volume udara yang besar pada ruangan. Untuk mencapai standar
                kenyamanan thermal Ashrae setidaknya ada 3 strategi utama yang diterapkan pada
                bangunan : Pembesaran volume ruangan melalui peninggian plafon, Cross Air
                Ventilation pada seluruh ruangan dengan okupansi tinggi dan Penerapan Ceiling Fan
                yang hanya mulai beroperasi pada periode panas (jam 12-17). Principal :
                @kafipangestu Team : @fazlysuper Vis : @edodarm Building Physics : @hale_lab
                @serasa.architect #biohouse #serasaarchitect #biohouse #biophilic #pandemi
                #housedesign #architecture #greenhouse #greenbuilding #sustainabledesign
                #architecturevisualization #architecturediagram #environmentaldesign #passivedesign
                #buildingperformance #buildingsimulation #buildingphysics #energymodeling
              </p>
            </figure>
          </div>
          <div className="layer-story-content-wrapper" id="layer-1" ref={layerStoryContentWrapper}>
            <img
              src="https://greensock.com/uploads/monthly_2020_05/greensock-thumb.png.640b7d423125b0ad11e9f2af1cbf94c9.png"
              alt=""
            />
          </div>

          <div className="layer-story-content-wrapper" id="layer-2" ref={layerStoryContentWrapper}>
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2021/03/06/tyler-hoechlin-pemeran-superman-dalam-superman-lois-1_43.jpeg?w=700&q=90"
              alt=""
            />
          </div>
          <div className="layer-story-content-wrapper" id="layer-3" ref={layerStoryContentWrapper}>
            <img
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/12/16/7020d72f-0ee9-49ce-a458-3f9f3aad4a52.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="last">
        <h2>Last</h2>
      </section>
    </div>
  )
}

export default ProjectParallax
