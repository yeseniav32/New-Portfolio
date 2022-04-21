import "./contact.css";
import PhoneIcon from "../../images/phone.png";
import EmailIcon from "../../images/email.png";
import LocationIcon from "../../images/location.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";



const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const sendEmail = (e)=>{
        e.preventDefault();


        emailjs.sendForm('service_q6jirxs', 'template_syte3gh', formRef.current, 'dG7l-lmYDfU7LvemI')
        .then((result) => {
            console.log("Email Sent!", result);
            setDone(true)
        }, (error) => {
            console.log("Failed...", error);
        });
    };

    return (
        <div className="contact">
            <div className="contact-background"></div>
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <h1 className="contact-title">Contact</h1>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <img src={PhoneIcon} alt="" className="contact-icon"/>
                                +1 (708) 513-4864
                            </div>
                            <div className="contact-info-item">
                                <img src={EmailIcon} alt="" className="contact-icon"/>
                                yeseniav32@gmail.com
                            </div>
                            <div className="contact-info-item">
                                <img src={LocationIcon} alt="" className="contact-icon"/>
                                Chicago, IL. U.S.A
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <p className="contact-description">
                            Interested in working with me? Say no more! Let's talk.
                        </p>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message" id="" cols="30" rows="5"></textarea>
                            <br />
                            <button>Submit</button>
                            {done && "Note has been sent!"}
                        </form>
                    </div>
                </div>
            
        </div>
    );
};

export default Contact