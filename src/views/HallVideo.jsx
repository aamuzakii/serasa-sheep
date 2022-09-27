import React, { useEffect } from "react";
let v1 =
  "https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243857/serasa/videos/1_cgn_mmcsor.mp4";
let v2 =
  "https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664232845/serasa/videos/2_dpk_o1kcvg.mp4";
let v3 =
  "https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243865/serasa/videos/3_cmg_e4lilc.mp4";
let v4 =
  "https://res.cloudinary.com/dm9ufmxnq/video/upload/v1664243855/serasa/videos/madiun_dn_drwvzq.mp4";

function HallVideo() {
  // Note: Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.

  useEffect(() => {
    let video = document.getElementById("root_video");
    let source = video.children[0];

    const playV4 = () => {
      source.setAttribute("src", v4);
      video.load();
      video.play();
      video.addEventListener("ended", playV1);
      video.removeEventListener("ended", playV4);
    };

    const playV3 = () => {
      source.setAttribute("src", v3);
      video.load();
      video.play();

      video.addEventListener("ended", playV4);
      video.removeEventListener("ended", playV3);
    };

    const playV2 = () => {
      source.setAttribute("src", v2);
      video.load();
      video.play();

      video.addEventListener("ended", playV3);
      video.removeEventListener("ended", playV2);
    };

    const playV1 = () => {
      source.setAttribute("src", v1);
      video.load();
      video.play();

      video.addEventListener("ended", playV2);
      video.removeEventListener("ended", playV1);
    };

    video.addEventListener("ended", playV2);
  }, []);

  return (
    <div className="fullscreen-bg">
      <video muted autoPlay className="fullscreen-bg__video" id="root_video">
        <source src={v1} type="video/mp4" />
      </video>
    </div>
  );
}

export default HallVideo;
