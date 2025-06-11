
import React from 'react'
import { motion } from 'framer-motion'
import android from  "../../assets/svg/android.svg"
import dribble from  "../../assets/svg/dribble.svg"
import graph from  "../../assets/svg/graph.svg"
import linkedln from  "../../assets/svg/linkedln.svg"
import pinterest from  "../../assets/svg/pinterest.svg"
import reddit from  "../../assets/svg/reddit.svg"
import rss from  "../../assets/svg/rss.svg"
import soundcloud from  "../../assets/svg/soundcloud.svg"
import wechat from  "../../assets/svg/wechat.svg"
import wordpress from  "../../assets/svg/wordpress.svg"



const logos = [
    android, dribble, graph, linkedln, pinterest,
    reddit, rss, soundcloud, wechat, wordpress
]

const Animate = () => {
    const duplicated = [...logos, ...logos]; // duplicate for seamless looping

  return (
    <div className="mt-16 overflow-hidden whitespace-nowrap w-full text-gray-200">
    <motion.div
      className="flex items-center gap-12"
      animate={{ x: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {duplicated.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`logo-${i}`}
          className="h-16 w-auto object-contain blur-xs"
        />
      ))}
    </motion.div></div>
  )
}

export default Animate