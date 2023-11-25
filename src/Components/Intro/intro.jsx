import React from 'react'
import './intro.css'
// import Background from '../../assets/Image.png'
import Background from '../../assets/image2.png'
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Resume from '../../assets/Files/DEEPANSHU_KAUSHIK.pdf'

const Intro = () => {
    return (
        <section id='introSec'>
            <img src={Background} alt='' className="bg" />
            <div className="introDiv">
                <p className='p1'>I'M</p>
                <h2 className='introh2'>Deepanshu Kaushik</h2>
                <p>Software Developer</p>
                <button className="introBtn">
                    <a className='aBtn' href={Resume}>Download CV</a>
                </button>
            </div>
            <div className='Social-div'>
            </div>
            <div className="socialIcn">
                <a href='https://www.linkedin.com/in/deepanshu-kaushik-220b29202/'><img src={Linkedin} alt="" className="socialImg" /> </a>
               <a href='https://github.com/deepanshukaushik123'><img src={Github} alt="" className="socialImg" /></a> 
               <a href='https://www.instagram.com/dkaushik_0/'><img src={Instagram} alt="" className="socialImg" /></a> 
               <a href=''><img src={Whatsapp} alt="" className="socialImg" /></a> 
            </div>

        </section>
    )
}

export default Intro