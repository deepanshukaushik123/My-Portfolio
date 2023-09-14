import React from 'react'
import './intro.css'
import Background from '../../assets/image2.png'
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Intro = () => {
    return (
        <section className='introSec'>
            <img src={Background} alt='' className="bg" />
            <div className="introDiv">
                <p className='p1'>I'M</p>
                <h2 className='introh2'>Deepanshu Kaushik</h2>
                <p>Fresher</p>
                <button className="introBtn">Download CV</button>
            </div>
            <div className='Social-div'>
            </div>
            <div className="socialIcn">
                    <img src={Linkedin} alt="" className="socialImg" />
                    <img src={Github} alt="" className="socialImg" />
                    <img src={Instagram} alt="" className="socialImg" />
                    <img src={Whatsapp} alt="" className="socialImg" />
                </div>
           
        </section>
    )
}

export default Intro