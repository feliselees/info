import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert("Error: " + error.message));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0082136557457!2d120.99727997406279!3d14.598607777127516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e545853bfd%3A0x8d26d1d9d9fe6552!2sChinese%20Compound%2C%20Santa%20Mesa%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1732272864537!5m2!1sen!2sph"
          />
          <div className="bg-gray-300 relative flex flex-wrap py-6 px-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-500 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-indigo-900">
                3013 Chinese Compound <br />
                Sta. Mesa Manila
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-500 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-900 leading-relaxed">
                felisemarcaida@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-500 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-indigo-900">09664481249</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          {/* Hidden input for Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          <h2 className="text-blue-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-2">
            If you are interested in hiring me, please see and fill the form below. Thank you.
          </p>

          {/* Name Input */}
          <div className="relative mb-5">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-200 rounded border border-gray-1000 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 rounded border border-gray-1000 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-pink-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Message Input */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-200 rounded border border-gray-1000 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-pink-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}