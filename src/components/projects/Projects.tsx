import zodo from "./../../assets/zodoapp.svg";
import climate from "./../../assets/climate.svg";
import shoper from "./../../assets/shoper.svg";
import { FaLink, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div
        id="project"
        className="w-full min-h-screen select-none flex-col flex items-center smPhone:h-max smPhone:mb-[30%] phone:h-max phone:gap-[10em]">
        {/* Heading */}
        <div className="w-full py-[5%] flex justify-center  ">
          <h1 className=" py-4 px-10 rounded-xl w-max text-6xl font-mono font-bold text-white smPhone:mt-10 phone:mt-10">
            Projects
          </h1>
        </div>
        {/* Projects Display */}

        {/* Project 1 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="w-4/5 rounded-xl h-[400px] mt-10 p-3  flex items-center smPhone:w-11/12 smPhone:flex-wrap phone:11/12 phone:flex-wrap phone:mt-0">
          {/* Img Con */}
          <img
            src={zodo}
            alt="Project Picture"
            className="w-[60%] rounded-xl hover:scale-105 transition-all smPhone:w-full smPhone:order-2 phone:order-1 phone:w-full"
          />
          {/* Details con */}
          <div
            className="text-end w-[40%] h-full flex flex-col justify-evenly relative right-10
          smPhone:text-sm smPhone:w-full smPhone:right-1 smPhone:order-2 phone:order-2 phone:w-full phone:right-1">
            <h1 className="text-3xl font-mono py-3 text-white font-bold smPhone:order-1 smPhone:text-xl">
              Zodo (Todo List Web App)
            </h1>
            <p className="bg-white rounded-xl p-6 text-lg font-mono smPhone:text-[10px] smPhone:p-1 smPhone:order-2 phone:mb-4">
              Zodo is the perfect companion for managing tasks effortlessly. It
              offers a sleek, intuitive UI, date options, and priorities for a
              stylish and productive experience.
            </p>
            {/* Stack Used */}
            <div className="w-ful flex items-center justify-end gap-3 order-3 smPhone:flex-wrap phone:mb-4">
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                HTML
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                CSS
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                JavaScript
              </p>
            </div>
            {/* Find Live or Code  */}
            <div className="w-full  flex justify-end gap-10 text-3xl text-white pr-3 order-5 smPhone:border-b border-gray-50 phone:border-b phone:pb-10 phone:mb-10">
              <a
                href="https://github.com/ZainMkhan/zodo"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaGithub />
              </a>
              <a
                href="https://zainmkhan.github.io/zodo/"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------- */}
        {/* Project 2 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="w-4/5 rounded-xl h-[400px] mt-[10%] mb-[10%] p-3  flex items-center smPhone:w-11/12 smPhone:flex-wrap smPhone:mt-[20%] smPhone:mb-[40%] phone:mt-[20%] phone:w-11/12 phone:flex-wrap">
          {/* Details con */}
          <div className="text-start w-[40%] h-full flex flex-col justify-evenly relative left-10 smPhone:text-sm smPhone:w-full smPhone:left-1 smPhone:order-2 phone:order-2 phone:w-full phone:left-1">
            <h1 className="text-3xl font-mono py-3 text-white font-bold smPhone:order-1 smPhone:text-xl">
              Climate (Weather App)
            </h1>
            <p className="bg-white rounded-xl p-6 text-lg font-mono z-20 smPhone:text-[10px] smPhone:p-1 smPhone:order-2 phone:mb-4">
              Climate is a weather app that combines the power of OpenWeather
              API and Geolocation technology to deliver accurate and up-to-date
              weather information for any location.
            </p>
            {/* Stack Used */}
            <div className="w-ful flex items-center justify-start gap-3 order-3 smPhone:flex-wrap smPhone:text-sm phone:mb-4">
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                React
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                CSS
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                JavaScript
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                API
              </p>
            </div>
            {/* Find Live or Code  */}
            <div className="w-full  flex justify-start gap-10 text-3xl text-white pl-3 order-5 smPhone:border-b border-gray-50 smPhone:pb-[10%] phone:border-b phone:pb-10 phone:mb-5">
              <a
                href="https://github.com/ZainMkhan/climate_weather_app"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaGithub />
              </a>
              <a
                href="https://climate-weather-app.netlify.app/"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaLink />
              </a>
            </div>
          </div>
          {/* Img Con */}
          <img
            src={climate}
            alt="Project Picture"
            className="w-[60%] rounded-xl hover:scale-105 transition-all border border-gray-50 smPhone:w-full smPhone:order-1 smPhone:mt-[30%]
            phone:order-1 phone:w-full"
          />
        </div>

        {/* Project 3 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="w-4/5 rounded-xl h-[400px] mt-20 mb-20 p-3  flex items-center smPhone:w-11/12 smPhone:flex-wrap smPhone:mt-[40%] phone:w-11/12 phone:flex-wrap phone:mt-[20%] phone:mb-[50%]">
          {/* Img Con */}
          <img
            src={shoper}
            alt="Project Picture"
            className="w-[60%] rounded-xl hover:scale-105 transition-all smPhone:w-full smPhone:order-2 phone:order-1 phone:w-full"
          />
          {/* Details con */}
          <div className="text-end w-[40%] h-full flex flex-col justify-evenly relative right-10 smPhone:text-sm smPhone:w-full smPhone:right-1 smPhone:order-2 phone:w-full phone:order-2 phone:right-1">
            <h1 className="text-3xl font-mono py-3 text-white font-bold smPhone:order-1 smPhone:text-xl">
              Shoper (Ecommerce Website)
            </h1>
            <p className="bg-white border border-black rounded-xl p-6 text-lg font-mono smPhone:text-[10px] smPhone:p-1 smPhone:order-2 phone:mb-4">
              Shoper is a Ecommerce Website which offers 4 Categories, I have
              used Fake Store API to fetch Products data and used Context Hook
              along with TypeScript to manage Cart and Products.
            </p>
            {/* Stack Used */}
            <div className="w-ful flex items-center justify-end gap-3 order-3 smPhone:flex-wrap phone:mb-4">
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                API
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                TailWind CSS
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                TypeScript
              </p>
              <p className="py-3 px-5 border rounded-[2em] text-white border-white hover:text-yellow-500">
                React
              </p>
            </div>
            {/* Find Live or Code  */}
            <div className="w-full  flex justify-end gap-10 text-3xl text-white pr-3 order-5 smPhone:border-b border-gray-50 smPhone:pb-[10%] phone:border-b phone:pb-10">
              <a
                href="https://github.com/ZainMkhan/shoperEcom"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaGithub />
              </a>
              <a
                href="https://shopperecom.netlify.app/"
                rel="noopener"
                target="_blank"
                className="hover:scale-110 hover:text-yellow-600">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
