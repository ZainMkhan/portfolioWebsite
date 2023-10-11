import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function FloatingIcons() {
  return (
    <>
      <div className="fixed bottom-0 right-[7%] flex flex-col items-center gap-4 text-yellow-400 select-none ">
        <a
          href="https://www.linkedin.com/in/zainmkkhan/"
          rel="noopener"
          target="_blank"
          className="text-2xl border p-2 border-black rounded-full hover:border-yellow-400 hover:translate-y-[-2px]">
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/ZainMkhan"
          rel="noopener"
          target="_blank"
          className="text-2xl border p-2 border-black rounded-full hover:border-yellow-400 hover:translate-y-[-2px]">
          <FaGithub />
        </a>
        <p className="text-6xl font-light ">|</p>
      </div>
    </>
  );
}

export default FloatingIcons;
