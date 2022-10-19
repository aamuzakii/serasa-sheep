import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'

export default function App() {
  const list = [
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264579/297174769_1263499707745193_2731266844231810095_n_jv61rp.jpg',
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264988/qq_dqzcjl.webp',
    'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661264894/sdsd_i0f3hi.webp',
  ]

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.position = 'absolute'
  }, [])

  const [seconds, setSeconds] = useState(0)
  if (seconds >= list.length) setSeconds((seconds) => 0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter className="container hall scrollbar-hide">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.5}}}
        exit={{opacity: 0}}
        style={{
          fontSize: 100,
          backgroundImage: 'url(' + list[seconds] + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
        }}
        key={seconds}
      ></motion.div>
    </AnimatePresence>
  )
}
