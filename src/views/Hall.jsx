import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {

  const list = [
    "https://res.cloudinary.com/dk0z4ums3/image/upload/v1660653697/webinar/WhatsApp%20Image%202022-08-16%20at%2010.12.34.jpeg_e2d1c4b1-6ff5-4be7-9c5a-703da96d24e6.jpg",
    "https://res.cloudinary.com/dk0z4ums3/image/upload/v1660653697/webinar/WhatsApp%20Image%202022-08-16%20at%2010.12.34.jpeg_e2d1c4b1-6ff5-4be7-9c5a-703da96d24e6.jpg",
    "https://images-platform.99static.com//qJSFkEDrJ8G6ToT5J-UOIy9Lklk=/24x0:1467x1443/fit-in/590x590/99designs-contests-attachments/112/112542/attachment_112542414",
    "https://res.cloudinary.com/dk0z4ums3/image/upload/v1660653697/webinar/WhatsApp%20Image%202022-08-16%20at%2010.12.34.jpeg_e2d1c4b1-6ff5-4be7-9c5a-703da96d24e6.jpg",
  ]

  const [seconds, setSeconds] = useState(0);
  if (seconds >= list.length) setSeconds((seconds) => 0);
  console.log(seconds )

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter className="container hall scrollbar-hide" >
      <motion.div
        initial={{opacity:0}}
        animate = {{opacity: 1, transition:{duration: 0.5}}}
        exit={{opacity: 0 }}
        style={{ fontSize: 100,   backgroundImage: "url(" + list[seconds] + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw'
      }}
        key={seconds}
      >
      </motion.div>
    </AnimatePresence>
  );
}