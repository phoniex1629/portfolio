/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-15 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[50px]"
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        I am Rudransh Jain, a highly motivated B.Tech student currently enrolled
        in the Information Technology program at ABES Engineering College in
        Ghaziabad, India. My journey is fueled by a passion for web development
        and problem-solving. During my academic journey, I have gained valuable
        experience through internships and projects. At Lets Grow More, I honed
        my web development skills by creating practical applications using HTML,
        CSS, JavaScript, and ReactJs. Additionally, my time as an Intern at DRDO
        allowed me to delve into Cryptography, focusing specifically on Privacy
        Preserving Techniques where I implemented the Domingo Ferrer scheme in
        C++.
        <br />
        Active involvement in various clubs and societies has been integral to
        my personal and professional growth. As a founding member of ACES
        ABESEC, a podcast channel and Event Organizer in the E-Cell and
        Cinematography Head in the Picturesque Club showcase my leadership and
        organizational abilities.
        <br />
        Proficient in languages like C++, C, Python, and technologies such as
        ReactJs, NodeJS, MongoDB, SQL, Power BI, I possess strong
        problem-solving skills coupled with effective communication and teamwork
        abilities.
        <br />
        My personal projects, including the Weather Detection Application, Chat
        Application, and Salary Prediction Web App, reflect my dedication to
        applying technical knowledge to real-world scenarios.
      </motion.p>

      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
