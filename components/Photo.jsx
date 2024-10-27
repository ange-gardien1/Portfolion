'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full">
      {/* <motion.div initial={{opacity:1,transition:{delay:2, duration:0.4, ease:"easyIn"} }} >
        <motion.div 
        
        initial={{opacity:1,transition:{delay:2, duration:0.4, ease:"easyIn"} }}
        className="w-[298px] h-[298px] xl:w-[298] xl-h[498px] mix-blend-overlay">
          <Image
            src="/assets/peopl.jpg"
            alt="photo"
            priority
            quality={60}
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Photo;
