import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
              I'm Uddipta Singha, currently pursuing B.Tech 4th year in Computer Science and Engineering from KIIT University, a passionate Full-Stack Developer with a strong interest in building impactful digital solutions. I love exploring new technologies, developing real-world projects, and continuously sharpening my programming and problem-solving skills.
        <br /><br />
        I have solid experience in JavaScript, TypeScript, and Python, along with modern styling tools like TailwindCSS. I'm proficient in frameworks such as React, Next.js, AngularJS, and Node.js, and I use databases like MongoDB and MySQL to build full-fledged web applications. I’m a quick learner and enjoy working collaboratively to deliver scalable, efficient, and user-centric solutions.
        <br /><br />
        I’m also familiar with libraries and tools like Bootstrap and Three.js, and I always strive to stay updated with the latest trends in web development. I have a good understanding of System Design concepts, including High-Level Design (HLD) and Low-Level Design (LLD), which help me architect robust and scalable applications.
        <br /><br />
        <strong>Let’s work together to bring your ideas to life!</strong>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
