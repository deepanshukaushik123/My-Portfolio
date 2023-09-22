import React, {useRef} from 'react'
import './contact.css'
import Logo from "../../assets/Photo.webp";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import emailjs from '@emailjs/browser';
import { CiLocationArrow1 } from 'react-icons/ci';
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneInbound} from 'react-icons/bs'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7l9ki2q', 'template_u7unaul', form.current, 'sphVkiCuTANDZQfbJ')
        .then((result) => {
            console.log(result.text);
            alert(result.text)
        }, (error) => {
            console.log(error.text);
            alert(error.text)
        });
};
  return (
    <div id='mainContainer'>
    <section className="aboutSec">
        <img src={Logo} className='logoImg' />
        <h2 className='abt-h2'>Deepanshu Kaushik</h2>
        <p className='abt-Para'>A Passionate Software Developer</p>
        <div className="abt-small-div">
        <div><CiLocationArrow1 /> Delhi, India</div>
        <div><AiOutlineMail />deepanshukaushik4721@gmail.com</div>
        <div><BsTelephoneInbound  />9650901894</div>
        </div>
        <span className="Icns">
            {/* <img src={Linkedin} className='icons' />
            <img src={Github} className='icons' />
            <img src={Instagram} className='icons' />
            <img src={Whatsapp} className='icons' /> */}

              <a href='https://www.linkedin.com/in/deepanshu-kaushik-220b29202/'><img src={Linkedin} alt="" className="icons" /> </a>
               <a href='https://github.com/deepanshukaushik123'><img src={Github} alt="" className="icons" /></a> 
               <a href='https://www.instagram.com/dkaushik_0/'><img src={Instagram} alt="" className="icons" /></a> 
               <a href=''><img src={Whatsapp} alt="" className="icons" /></a> 
        </span>
    </section>
    <section className="contactMe">
    <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm'  ref={form} onSubmit={sendEmail}>
                    <input type="text" required='true' className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" required='true' className="email" placeholder='Your Email' name='your_email'/>
                    <textarea name="message" required='true' className='msg' cols="30" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                </form>
            </div>
    </section>
    </div>
  )
}

export default Contact