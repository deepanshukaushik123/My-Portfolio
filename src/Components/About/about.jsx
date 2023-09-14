import React from 'react'
import './about.css'
import Java from '../../assets/Java.png'
import Html from '../../assets/HTML.svg'
import Css from '../../assets/CSS.svg'
import Javascript from '../../assets/JavaScript-logo.png'
import react from '../../assets/React.png'
import Wordpress from '../../assets/WordPress.png'
import Ubuntu from '../../assets/ubuntu-logo.png'
import Sass from '../../assets/sass.svg'


const About = () => {

    const skillObj = [
    
    {
        img: Html,
        title:'HTML'
    },
   
    {
        img: Css,
        title:'CSS'
    },
    {
        img: Javascript,
        title:'JavaScript'
    },
    {
        img: react,
        title:'React'
    },
    {
        img: Java,
        title:'Core-Java'
    },
    {
        img: Wordpress,
        title:'WordPress'
    },
    {
        img: Ubuntu,
        title:'Ubuntu'
    },
    {
        img: Sass,
        title:'Sass'
    },
    
    ]
    return (
        <section>
            <div className='about'>
                <h1>About</h1>
                <div className='abt-div'>
                <span className='arrow'>      </span> 
                
                <span className='p2'>Currently wrapping up my BTech degree.
                    So, what's my thing? Well, it's all about software development.
                   <span style={{color: 'rgb(254,200,106)'}}> I'm kind of obsessed with it!
                   </span>
                     You know, writing code, making things work, and turning ideas into digital reality – that's my jam.
                    I've been diving deep into this tech world during my studies, and I can't get enough of it. I'm always on the lookout for the latest and greatest in software development.
                    Exciting times ahead!
                </span>
                </div>
            </div>
            <div className="mySkills">
                My Skills
                <div className='skillCardAlign'>
                {skillObj.map((item, index) => {
                    return(
                        <div className="skillsCard">
                        <img src={item.img} alt="" className="skillsImg" />
                        <div className="skillTitle">{item.title}</div>
                    </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default About