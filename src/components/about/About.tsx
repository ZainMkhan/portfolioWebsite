import {
  FaUniversity,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className="w-11/12 h-screen flex items-center text-3xl font-bold justify-center  overflow-hidden flex-wrap gap-5 select-none smPhone:h-max phone:h-max">
      {/* About me */}
      <div
        data-aos="fade-right"
        className="w-[60%] h-[70%] mt-[2%] rounded-2xl px-4 py-3 font-mono bg-white shadow-xl flex flex-col justify-between smPhone:w-[90%] smPhone:items-center smPhone:h-max smPhone:text-base phone:w-[90%]">
        <div className="smPhone:flex smPhone:flex-col smPhone:items-center ">
          <button className="w-max px-4 mx-3 py-2 rounded-3xl border hover:text-white hover:bg-yellow-400 transition-all duration-700 ease-in-out">
            About Me
          </button>
          <p className="font-mono text-[24px] px-5 py-5 font-light smPhone:py-2 smPhone:text-sm phone:text-lg">
            I'm Zain, I'm a passionate Junior Front End Developer with a strong
            creative streak and a knack for problem-solving. I thrive on
            challenges and approach each project with a "Can Do" attitude,
            always eager to learn and grow in this ever-evolving field.
          </p>
          <p className="font-mono text-[24px] px-5 font-light smPhone:hidden phone:hidden">
            I'm always looking for ways to learn more and discover new things. I
            really enjoy gaining new skills and I love helping others do the
            same through my work.
          </p>
        </div>
        {/* Contact and Resume Button */}
        <div className=" w-full mb-10 p-6 flex justify-evenly smPhone:mb-1">
          <button className="w-max px-6 py-4 border rounded-[2em] border-red-300 shadow-xl hover:bg-yellow-400 hover:border-none transition-all ease-in-out duration-700 font-light smPhone:py-3 phone:text-2xl">
            Download Resume
          </button>
        </div>
      </div>

      {/* Education & Skills*/}

      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="w-[35%] bg-white h-[70%] mt-[2%] rounded-2xl shadow-xl flex flex-col justify-between smPhone:w-[90%] smPhone:h-max smPhone:text-sm smPhone:flex-wrap phone:text-lg phone:h-max phone:w-[90%]">
        {/* Education Section */}
        <div className="w-full text-center py-3 h-[50%] font-light flex flex-col items-center">
          {/* Eductaion heading */}
          <h1 className="rounded-3xl border hover:text-white hover:bg-yellow-400 transition-all duration-700 ease-in-out w-max px-6 py-2 font-bold font-mono smPhone:mb-2 phone:mb-4">
            Education
          </h1>
          {/* Education Detail Section */}
          <div className="w-full flex px-3 justify-evenly items-center h-full group">
            <h1 className="w-max rounded-[3em] border p-3 group-hover:border-yellow-400 phone:text-4xl">
              <FaUniversity />
            </h1>
            <hr className="w-[40%]   h-1 bg-black group-hover:bg-yellow-400 smPhone:w-[10%]" />
            <div className="flex flex-col items-end border p-2 group-hover:border-yellow-400 smPhone:p-2 smPhone:font-bold">
              <h1 className="text-2xl smPhone:text-sm smPhone:w-full">
                Virtual University of Pakistan
              </h1>
              <p className="text-base smPhone:text-[10px]">
                Bachelors in Information Technology
              </p>
              <p className="w-max text-base smPhone:text-sm smPhone:text-[10px]">
                Mar 2022 - Present
              </p>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="w-full text-center py-3 h-[50%] flex items-center flex-col smPhone:text-sm">
          <h1 className="rounded-3xl border hover:text-white hover:bg-yellow-400 transition-all duration-700 ease-in-out w-max px-6 py-2 font-bold font-mono smPhone:font-bold">
            Tools & Technologies
          </h1>
          <div className="w-full justify-center h-max flex flex-wrap py-5 gap-4 smPhone:text-sm">
            <p className="w-max px-3 py-2 border rounded-xl text-lg flex items-center gap-1 smPhone:text-sm">
              <FaHtml5 /> HTML
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg flex items-center gap-1 smPhone:text-sm">
              <FaCss3Alt /> CSS
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg smPhone:text-sm">
              JavaScript
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg flex items-center gap-1 smPhone:text-sm">
              <FaReact /> React
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg smPhone:text-sm">
              TypeScript
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg smPhone:text-sm">
              Tailwind CSS
            </p>
            <p className="w-max px-3 py-2 border rounded-xl text-lg flex items-center gap-1 smPhone:text-sm">
              <FaGithub /> Git/Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
