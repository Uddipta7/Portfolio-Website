import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import { styles } from "../styles";
import { github, profilePhoto } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, learningJourney } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// 🔹 Individual Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 60, scale: 1, speed: 450 }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// 🔹 Learning Journey Section
const LearningJourneySection = () => (
  <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
    {/* Left: Content */}
    <motion.div variants={textVariant()} className="flex-1">
      <p className={`${styles.sectionSubText}`}>Beyond Academics</p>
      <h2 className={`${styles.sectionHeadText}`}>Learning Journey.</h2>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        <h3 className="text-white font-semibold text-[20px] mb-2">Coding Profiles:</h3>
        <ul className="space-y-2 mb-4">
          {learningJourney.codingProfiles.map((profile, index) => (
            <li key={index} className="flex items-center gap-2">
              {profile.platform === "LeetCode" && <SiLeetcode className="text-yellow-400 text-xl" />}
              {profile.platform === "GeeksforGeeks" && <SiGeeksforgeeks className="text-green-500 text-xl" />}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-white transition"
              >
                {profile.platform}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="text-white font-semibold text-[20px] mb-2">Certifications:</h3>
        <ul className="list-disc list-inside mb-4">
          {learningJourney.certifications.map((cert, index) => (
            <li key={index}>{cert.title} – {cert.issuer}</li>
          ))}
        </ul>

        <h3 className="text-white font-semibold text-[20px] mb-2">Programs Attended:</h3>
        <ul className="list-disc list-inside">
          {learningJourney.programs.map((program, index) => (
            <li key={index}>{program.title}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

    {/* Right: Styled Image */}
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 1)}
      className="flex-1 flex justify-end items-center ml-auto"
    >
      <img
        src={profilePhoto}
        alt="Profile"
        className="rounded-2xl border border-gray-600 shadow-lg w-[280px] md:w-[340px] lg:w-[400px] hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  </div>
);

// 🔹 Projects Section
const ProjectsSection = () => (
  <>
    <motion.div variants={textVariant()} className="mt-16">
      <p className={`${styles.sectionSubText}`}>My Work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      Following projects showcase my skills and experience through real-world examples.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

const CombinedWorks = () => (
  <>
    <div id="journey">{SectionWrapper(LearningJourneySection, "")()}</div>
    <div id="work">{SectionWrapper(ProjectsSection, "")()}</div>
  </>
);

export default CombinedWorks;
