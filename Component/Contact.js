"use client";
import React from "react";
import Image from "next/image";
const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d94efa89-dc09-415e-a55b-ed44a90bde57");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  const scrollEl = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 50,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scrollEl(goto);
    }, 100);
  }
  return (
    <>
      <div className="contact_main" id="contact">
        <hr className="line" />
        <h1 className="contact_head">Let's Connect</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form_input"
            placeholder="Enter Your Name"
          />
          <input
            type="number"
            name="phone"
            className="form_input"
            placeholder="Enter Your Number"
          />
          <input
            type="email"
            name="email"
            className="form_input"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            className="msg_input"
            placeholder="Enter Your Message"
          ></textarea>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
        <hr className="line2" />
        <div className="social_topbtn">
        <div className="social_div">
          <a href="https://www.linkedin.com/in/mohammad-nazim-husain-1ab024246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Image src="/linkedin.png" width={30} height={30} />
          </a>

          <a href="https://www.instagram.com/savitar_designs?igsh=YjZuN3pwcTZxYXQz">
            <Image src="/instagram.png" width={30} height={30} />
          </a>

          <a href="https://dribbble.com/shots/22189131-Halloween-Sale-Design?utm_source=Clipboard_Shot&utm_campaign=savitar_1106&utm_content=Halloween%20Sale%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=savitar_1106&utm_content=Halloween%20Sale%20Design&utm_medium=Social_Share">
            <Image src="/dribbble.png" width={30} height={30} />
          </a>
        </div>

        <button goto="navbar" onClick={onBtnClick} className="topbtn">Back to top</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
