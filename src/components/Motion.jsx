import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import backgroundImage from "../../src/assets/texto.png";
const image={
    "src":backgroundImage
}

const Motion = () => {

    return ( 
        <AnimatePresence>
        <motion.img
          key={image.src}
          src={image.src}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

     );
}
 
export default Motion;