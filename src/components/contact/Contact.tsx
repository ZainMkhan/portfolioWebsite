import { FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MessageSent from "./MessageSent";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    const formElement = form.current;

    if (formElement) {
      emailjs
        .sendForm(
          "service_cms5zih",
          "template_r62edw8",
          formElement,
          "1mN5rHm7k2og_xIhc"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message Sent!");

            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 3000);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div
        id="contact"
        className="w-11/12  h-max flex flex-col items-center mt-[5%] mb-[10%] select-none smPhone:mb-[40%]">
        <div className="w-[90%] bg-white px-10 py-5 text-5xl font-mono rounded-2xl">
          <h1 className="flex justify-between py-3 smPhone:text-xl items-center">
            Connect with me!
            <a
              href="https://www.linkedin.com/in/zainmkkhan/"
              rel="noopener"
              target="_blank">
              <FaLinkedin className="border hover:border-yellow-400 hover:translate-y-[-2px] smPhone:text-3xl" />
            </a>
          </h1>
          <p className="text-xl smPhone:w-full smPhone:text-sm">
            I would love to hear from you and discuss any potential
            opportunities or collaborations
          </p>
        </div>
        <div className="w-[70%] mt-10 h-[200px] smPhone:w-11/12 smPhone:mb-[10%] phone:w-11/12 phone:mb-[20%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col bg-gray-50 p-2 rounded-xl gap-2">
            <div className="flex w-full">
              {/* Name */}
              <div className="w-[50%]  py-4 px-1 flex gap-2 flex-col items-center">
                <input
                  type="text"
                  name="user_name"
                  className="white w-full py-3 rounded-xl px-3 text-lg outline-yellow-500 border-4"
                  placeholder="Name.."
                  required
                />
                <div>
                  <p></p>
                </div>
              </div>
              {/* Email */}
              <div className="w-[50%] py-4 px-1  flex gap-2 items-center flex-col ">
                <input
                  type="email"
                  name="user_email"
                  className="white w-full py-3 rounded-xl px-3 text-lg  outline-yellow-500 border-4"
                  placeholder="Email.."
                  required
                  onChange={(e) => {
                    const email = e.target.value;
                    const emailRegex =
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    if (!emailRegex.test(email)) {
                      setValidationErrors({
                        ...validationErrors,
                        email: "Enter a valid email address.",
                      });
                    } else {
                      setValidationErrors({
                        ...validationErrors,
                        email: "",
                      });
                    }
                  }}
                />
                {/* Error */}
                <div className="relative w-full">
                  {validationErrors.email && (
                    <p className="text-red-500 text-base m-0 px-3 w-full">
                      {validationErrors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="py-4 px-1 flex gap-2 items-center flex-col">
              <textarea
                name="message"
                className="white w-full py-3 rounded-xl px-3 text-lg outline-yellow-500 border-4"
                placeholder="Message.."
                required
                onChange={(e) => {
                  const message = e.target.value;
                  if (message.length < 50) {
                    setValidationErrors({
                      ...validationErrors,
                      message: "Message must be at least 50 characters.",
                    });
                  } else {
                    setValidationErrors({
                      ...validationErrors,
                      message: "",
                    });
                  }
                }}
              />
              {validationErrors.message && (
                <p className="text-red-500">{validationErrors.message}</p>
              )}
            </div>
            {/* Send Button */}
            <input
              type="submit"
              value="Send"
              className="bg-white py-3 px-1 mt-3 text-xl border-4 font-mono font-bold rounded-xl hover:bg-yellow-400 transition-all duration-500"
              disabled={
                validationErrors.email !== "" || validationErrors.message !== ""
              }
            />
          </form>
          {showSuccessMessage && <MessageSent />}
        </div>
      </div>
    </>
  );
}

export default Contact;
