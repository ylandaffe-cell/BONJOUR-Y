/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black font-sans selection:bg-white/10">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 70%)' }}
      />
      
      {/* Top Labels */}
      <div className="absolute top-8 left-8 z-20 md:top-12 md:left-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-[10px] whitespace-nowrap tracking-[0.4em] text-white uppercase md:text-[11px]"
        >
          01 / Minimalist Core
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 z-20 md:top-12 md:right-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-mono text-[10px] whitespace-nowrap tracking-[0.4em] text-white uppercase md:text-[11px]"
        >
          V.2024.01
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="m-0 select-none text-[clamp(40px,15vw,200px)] text-center font-black leading-none tracking-[-0.04em] text-white"
          style={{ filter: 'drop-shadow(0 0 50px rgba(255, 255, 255, 0.1))' }}
          id="greeting"
        >
          BONJOUR YLAN
        </motion.h1>
      </div>

      {/* Bottom Labels */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:bottom-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-mono text-[9px] whitespace-nowrap tracking-[0.5em] text-white uppercase md:text-[10px]"
        >
          The Essence of Interaction
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-3 md:bottom-12 md:right-12 md:gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
            className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-white' : 'border border-white'}`}
          />
        ))}
      </div>
    </div>
  );
}

