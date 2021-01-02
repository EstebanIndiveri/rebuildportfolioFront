import * as React from "react";
import { motion } from "framer-motion";
import './MotionAnime.scss';
export const Example = ({color,setColor,content,logo}) => {
  console.log(logo);
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        background:`${color}`,
        boxShadow:'1px 1px 3px 2px #ebebeb'
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    >
      {logo==='/static/media/react-logo.617f8b03.png'?(
        <img src={logo} alt="" height="110px" width="150px" className="d-flex text-center justify-content-center mx-auto align-items-center mt-3 fade-in"></img>
      ):
      logo==="/static/media/flutter.1362e49b.png"?
      <img src={logo} alt="" height="110px" width="100px" className="d-flex text-center justify-content-center mx-auto align-items-center mt-3 fade-in "></img>
      :
      logo==="/static/media/angular.f63b3b63.png"?
      <img src={logo} alt="" height="120px" width="120px" className="d-flex text-center justify-content-center mx-auto align-items-center mt-3 fade-in "></img>
      :null
    }
      
      </motion.div>
  );
};
