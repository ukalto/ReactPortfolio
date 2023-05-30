import React, {useState} from "react";
import styled from "styled-components";
import {MdAlternateEmail} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {FiMail} from "react-icons/fi";
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let missingFields = "";
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        if (checkValues()) {
            const id = toast.loading('Loading', {
                position: "bottom-center",
            });
            const emailData = {
                from_mail: email,
                subject: subject,
                message: message
            }
            emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID)
                .then((result) => {
                    toast.update(id, {
                        render: 'Successfully send!',
                        type: 'success',
                        isLoading: false,
                        autoClose: 5000,
                        draggable: true,
                        closeOnClick: true
                    });
                    setEmail("");
                    setSubject("");
                    setMessage("");
                }, (error) => {
                    toast.update(id, {
                        render: 'Sending was not successful! Error: ' + error,
                        type: 'error',
                        isLoading: false,
                        autoClose: 5000,
                        draggable: true,
                        closeOnClick: true
                    });
                });
        } else {
            toast.error('Sending was not successful! Please fill in: ' + missingFields, {
                position: toast.POSITION.BOTTOM_CENTER,
                closeOnClick: true
            });
        }
    };

    const handleFocus = (obj) => {
        document.getElementById(obj).style = "outline: none; border-color: var(---secondary); box-shadow: 0 0 10px var(---secondary);"
    };

    const handleBlur = (obj) => {
        document.getElementById(obj).style = "border: 1px solid var(---tertiary); box-shadow:initial;";
    };

    function checkValues() {
        let check = true;
        missingFields = "";
        if (!filter.test(email)) {
            missingFields += "email\n"
            document.getElementById("email").style = "outline: none; border-color: var(---error); box-shadow: 0 0 10px var(---error);"
            check = false;
        }
        if (subject.length <= 0) {
            missingFields += "subject\n"
            document.getElementById("subject").style = "outline: none; border-color: var(---error); box-shadow: 0 0 10px var(---error);"
            check = false;
        }
        if (message.length <= 0) {
            missingFields += "message\n"
            document.getElementById("message").style = "outline: none; border-color: var(---error); box-shadow: 0 0 10px var(---error);"
            check = false;
        }
        return check;
    }

    return (
        <Container id="contact">
            <h1>Contact <span style={{color: 'var(---secondary)'}}>Me</span></h1>
            <Form>
                <form onSubmit={sendEmail}>
                    <div className="subject" id={"subject"}>
              <span>
                <CgProfile/>
              </span>
                        <input type="text"
                               placeholder="Subject..."
                               value={subject}
                               onChange={(e) => setSubject(e.target.value)}
                               onFocus={() => handleFocus("subject")}
                               onBlur={() => handleBlur("subject")}/>
                    </div>
                    <div className="email" id={"email"}>
              <span>
                <MdAlternateEmail/>
              </span>
                        <input placeholder="Email..."
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               onFocus={() => handleFocus("email")}
                               onBlur={() => handleBlur("email")}/>
                    </div>
                    <div className="message" id={"message"}>
              <span className="messageIcon">
                <FiMail/>
              </span>
                        <textarea cols="30"
                                  rows="10"
                                  placeholder="Message..."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  onFocus={() => handleFocus("message")}
                                  onBlur={() => handleBlur("message")}></textarea>
                    </div>
                    <button type={"submit"} onClick={checkValues}>Submit</button>
                </form>
            </Form>
            <ToastContainer/>
        </Container>
    );
};

export default Contact;

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto 6rem;

  h1 {
    padding-bottom: 1.3rem;
  }

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Form = styled.div`
  flex: 1;

  form {
    div {
      border: 1px solid var(---tertiary);
    }

    .subject,
    .email,
    .message {
      display: flex;
      margin-bottom: 0.5rem;

      input,
      textarea {
        background-color: var(---primary);
        color: var(---tertiary);
        opacity: 95%;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        padding: 1rem 0.5rem;
      }

      span {
        background-color: var(---tertiary);
        color: white;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 100%;
      height: 3rem;
      background-color: var(---secondary);
      color: var(---primary);
      font-size: 1.5rem;
      font-weight: bold;
      border: 1px solid var(---tertiary);
      cursor: pointer;
    }
  }
`;
