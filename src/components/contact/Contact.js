import "./Contact.scss";
import { useState } from "react";
import { send } from "emailjs-com";

import { Fade } from "react-awesome-reveal";

import GitHubLogo from "../../images/logos/github.png";
import LinkedInLogo from "../../images/logos/linkedIn.png";
import Listening from "../../images/listening.png";
import EmailPrompt from "./emailPrompt/EmailPrompt";

const Contact = ({ lightTheme, refContact }) => {
  const emailRegex = /\S+@\S+\.\S+/;

  const [errors, setErrors] = useState({
    from_name: false,
    from_email: false,
    title: false,
    message: false,
  });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    title: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { from_name, from_email, title, message } = formData;

    if (from_name === "")
      return setErrors((prev) => {
        return {
          ...prev,
          from_name: true,
        };
      });
    else {
      setErrors((prev) => {
        return {
          ...prev,
          from_name: false,
        };
      });
    }

    if (from_email === "")
      return setErrors((prev) => {
        return {
          ...prev,
          from_email: true,
        };
      });
    else {
      setErrors((prev) => {
        return {
          ...prev,
          from_email: false,
        };
      });
    }

    if (emailRegex.test(from_email)) {
      setErrors((prev) => {
        return {
          ...prev,
          from_email: false,
        };
      });
    } else {
      return setErrors((prev) => {
        return {
          ...prev,
          from_email: "Invalid Email",
        };
      });
    }

    if (title === "")
      return setErrors((prev) => {
        return {
          ...prev,
          title: true,
        };
      });
    else {
      setErrors((prev) => {
        return {
          ...prev,
          title: false,
        };
      });
    }

    if (message === "")
      return setErrors((prev) => {
        return {
          ...prev,
          message: true,
        };
      });
    else {
      setErrors((prev) => {
        return {
          ...prev,
          message: false,
        };
      });
    }

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_USER_ID
    ).then(
      (result) => {
        e.target.reset();

        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 7000);

        setFormData({
          from_name: "",
          from_email: "",
          title: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div
      className="Contact"
      ref={refContact}
      style={
        lightTheme
          ? { backgroundColor: "rgb(24,24,24)" }
          : { backgroundColor: "white" }
      }
    >
      <div className="contact-me">
        <Fade triggerOnce direction="left" duration={900}>
          <h1>Contact me!</h1>

          <p style={lightTheme ? { color: "white" } : { color: "black" }}>
            Etiam faucibus ante et lacinia dignissim. Proin quis dapibus tortor.
            Sed id lectus in metus hendrerit efficitur sed sed dui. Ut leo quam,
            porta sit amet neque eget.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                style={
                  errors.from_name
                    ? { boxShadow: "inset 0 -4px rgb(216, 21, 21)" }
                    : null
                }
                value={formData.from_name}
                name="from_name"
                type="text"
                placeholder="name"
                onChange={handleChange}
              />
              <input
                style={
                  errors.from_email
                    ? { boxShadow: "inset 0 -4px rgb(216, 21, 21)" }
                    : null
                }
                value={formData.from_email}
                name="from_email"
                type="text"
                placeholder="email"
                onChange={handleChange}
              />
            </div>
            <input
              style={
                errors.title
                  ? { boxShadow: "inset 0 -4px rgb(216, 21, 21)" }
                  : null
              }
              value={formData.title}
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
            />
            <textarea
              style={
                errors.message
                  ? { boxShadow: "inset 0 -4px rgb(216, 21, 21)" }
                  : null
              }
              cols={11}
              rows={22}
              value={formData.message}
              name="message"
              placeholder="message"
              onChange={handleChange}
            />
            <button type="submit" className="btn draw-border">
              Send A Message
            </button>
          </form>
        </Fade>
        <div className="custom-shape-divider-top-1649466898">
          <div className="custom-shape-divider-top-1649532422">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1400 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
                fill={lightTheme ? "white" : "rgb(24,24,24)"}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
                fill={lightTheme ? "white" : "rgb(24,24,24)"}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
                fill={lightTheme ? "white" : "rgb(24,24,24)"}
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="socials">
        <h2>Check me out</h2>
        <a
          href="https://www.linkedin.com/in/anthony-n-96a368237/"
          target={"blank"}
        >
          <img
            style={{ marginLeft: "-70px" }}
            src={LinkedInLogo}
            alt="LinkedIn Logo"
          />{" "}
        </a>
        <a href="https://github.com/Nuccino92" target={"blank"}>
          <img
            style={
              lightTheme
                ? { filter: "invert(100%)", marginRight: "-70px" }
                : { marginRight: "-70px" }
            }
            src={GitHubLogo}
            alt="Github Logo"
          />{" "}
        </a>

        <img className="listening-image" src={Listening} alt="Listening" />
      </div>
      {emailSent && <EmailPrompt />}
      <div className="contact-background-text">Contact</div>
    </div>
  );
};

export default Contact;
