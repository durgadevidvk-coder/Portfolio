

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  // SEND EMAIL FUNCTION
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )

      .then(
        () => {

          alert("Message Sent Successfully!");

        },

        () => {

          alert("Failed to Send Message");

        }
      );

    e.target.reset();
  };

  return (

    <section
      id="contact"
      className="bg-[#f8f5ff] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="text-center mb-20">

          <p className="text-purple-600 uppercase tracking-[6px] font-semibold mb-5">
            Contact Us
          </p>

          <h1 className="text-6xl font-bold text-black mb-8">
            Have a Project?
          </h1>

          <p className="text-gray-500 text-xl leading-10 max-w-3xl mx-auto">
            Feel free to contact me for web development projects and UI design work.
          </p>

        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border border-purple-300 px-5 py-4 outline-none rounded-xl focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="border border-purple-300 px-5 py-4 outline-none rounded-xl focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-purple-300 px-5 py-4 outline-none rounded-xl mb-6 focus:ring-2 focus:ring-purple-500"
            />

            {/* MESSAGE */}
            <textarea
              rows="8"
              name="message"
              placeholder="Message"
              required
              className="w-full border border-purple-300 px-5 py-4 outline-none rounded-xl mb-6 resize-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition duration-300"
            >

              Send Message

            </button>

          </form>

          {/* CONTACT DETAILS */}
          <div className="space-y-10">

            {/* ADDRESS */}
            <div className="flex items-start gap-6">

              <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg">
                <FaMapMarkerAlt className="text-2xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold mb-2">
                  Address:
                </h2>

                <p className="text-gray-500 text-lg">
                  Chennai, Tamil Nadu, India
                </p>

              </div>

            </div>

            {/* PHONE */}
            <div className="flex items-start gap-6">

              <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg">
                <FaPhoneAlt className="text-2xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold mb-2">
                  Phone:
                </h2>

                <p className="text-gray-500 text-lg">
                  +91 9789632527
                </p>

              </div>

            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-6">

              <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg">
                <FaPaperPlane className="text-2xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold mb-2">
                  Email:
                </h2>

                <p className="text-gray-500 text-lg">
                  durgadevidvk@gmail.com
                </p>

              </div>

            </div>

            {/* WEBSITE */}
            <div className="flex items-start gap-6">

              <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg">
                <FaGlobe className="text-2xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold mb-2">
                  Website:
                </h2>

                <p className="text-gray-500 text-lg">
                  www.portfolio.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;