import background from "../../assets/heroimg.svg";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-scroll";

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        id="home"
        className="w-full flex flex-col min-h-[100vh] pt-[8%] bg-no-repeat bg-cover bg-center justify-center font-mono select-none transition-all duration-[2000ms] ease-in-out smPhone:min-h-[70vh] smPhone:pb-0"
        style={{ backgroundImage: `url(${background})` }}>
        {/* Hero Headings */}
        <div className="w-[70%] ml-[10%] mb-5 smPhone:w-max smPhone:ml-10 ">
          <h1
            data-aos="fade-up"
            className="text-4xl py-2 text-white font-mono phone:text-3xl smPhone:text-xl">
            Hello!👋 My name is{" "}
          </h1>
          <h1
            data-aos="fade-up"
            className="text-7xl font-mono text-white font-bold phone:text-5xl smPhone:text-2xl">
            Zain Masood Khan
          </h1>
          <h1
            data-aos="fade-up"
            className="text-5xl text-white py-2 phone:w-max phone:text-3xl smPhone:text-lg">
            <span className="phone:hidden">I am a </span>
            <Typewriter
              words={[
                "Junior Front End Developer",
                "Freelancer",
                "Tech Enthusiasts!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </h1>
        </div>
        {/* About me Button */}
        <div className="w-[20%] ml-[10%] smPhone:w-[60%] phone:w-[50%]">
          <Link to="about" smooth>
            <button
              data-aos="fade-right"
              className="bg-yellow-400 w-[70%] py-4 text-2xl font-bold rounded-lg  text-center hover:rounded-[3em] z-0 shadow-lg transition-all duration-700 ease-in-out smPhone:text-lg smPhone:w-[60%] smPhone:py-2 ">
              About me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
