import React, { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Project() {
  const imgList = [
    "https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg",
    "https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp",
    "https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp",
  ];

  const lorem =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    let a = document.querySelector(".nav-container").style;
    // if (width < 425) {
    //   // mobile device
    //   a.position = "static"
    // } else {
    //   a.position = "sticky"
    //   // a.top = "20px"
    // }
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: "17h3ih7qgcc4",
      environment: "master", // defaults to 'master' if not set
      accessToken: "1kmLGUt1ik4agDMGQqOECmWOV3-V7AluRosQbI_SkrA",
    });

    client
      .getEntries()
      .then((response) => console.log(response.items))
      .catch(console.error);

    window.scrollTo(0, 0); // solve bug
  }, []);

  return (
    <div className="container project-single">
      <div className="left">
        <div className="floating-par">
          <p>{lorem}</p>
          <p>{lorem}</p>
        </div>
      </div>
      <div className="right">
        {imgList.map((image_link, i) => (
          <img className="single-img" src={image_link} alt="" width={800} />
        ))}
      </div>
    </div>
  );
}

export default Project;
