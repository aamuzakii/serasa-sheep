import React, {useState, useEffect} from 'react'
import v1 from '../assets/videos/cgn_1.mp4'
import v2 from '../assets/videos/dpk_2.mp4'
import v3 from '../assets/videos/cmg_3.mp4'
import v4 from '../assets/videos/madiun_day_night.mp4'

function HallVideo() {
  // Note: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.
  const [videoSrc, setVideoSrc] = useState('')
  const [videoIndex, setVideoIndex] = useState(1)

  let arrOfVideo = [v1, v2, v3, v4]

  useEffect(() => {
    let video = document.getElementById('root_video')
    let source = video.children[0]
    video.addEventListener('ended', function(){
      source.setAttribute('src', v2);
      video.load();
      video.play();
 
      video.addEventListener('ended', function(){
        source.setAttribute('src', v3);
        video.load();
        video.play();

        video.addEventListener('ended', function(){
          source.setAttribute('src', v4);
          video.load();
          video.play();
        });
      });
    });
  }, [])
  

  return (
    <div className="fullscreen-bg">
        <video muted autoPlay className="fullscreen-bg__video" id="root_video">
            <source src={v1} type="video/mp4"/>
        </video>
    </div>
  )
}

export default HallVideo