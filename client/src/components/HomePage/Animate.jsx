import React from 'react';
import { motion } from 'framer-motion';
import android from "../../assets/svg/android.svg";
import dribble from "../../assets/svg/dribble.svg";
import graph from "../../assets/svg/graph.svg";
import linkedln from "../../assets/svg/linkedln.svg";
import pinterest from "../../assets/svg/pinterest.svg";
import reddit from "../../assets/svg/reddit.svg";
import rss from "../../assets/svg/rss.svg";
import soundcloud from "../../assets/svg/soundcloud.svg";
import wechat from "../../assets/svg/wechat.svg";
import wordpress from "../../assets/svg/wordpress.svg";

const logos = [
  android, dribble, graph, linkedln, pinterest,
  reddit, rss, soundcloud, wechat, wordpress
];

const Animate = () => {
  const duplicated = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full mt-16">
      <motion.div
        className="flex gap-12 min-w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      >
        {duplicated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            className="h-10 w-auto object-contain opacity-50"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Animate;
