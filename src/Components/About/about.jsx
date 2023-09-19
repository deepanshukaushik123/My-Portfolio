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
import ConnectFour from '../../assets/ConnectFour.png'
import KarmicQuest from '../../assets/KarmicQuest.png'
import Archts from '../../assets/Archts.png'


const About = () => {

    const skillObj = [

        {
            img: Html,
            title: 'HTML'
        },

        {
            img: Css,
            title: 'CSS'
        },
        {
            img: Javascript,
            title: 'JavaScript'
        },
        {
            img: react,
            title: 'React'
        },
        {
            img: Java,
            title: 'Core-Java'
        },
        {
            img: Wordpress,
            title: 'WordPress'
        },
        {
            img: Ubuntu,
            title: 'Ubuntu'
        },
        {
            img: Sass,
            title: 'Sass'
        },

    ]

    const projectsObj = [

        {
            img: ConnectFour,
            title: 'Connect Four',
            desc: 'A desktop game app designed using JavaFX'
        },

        {
            img: KarmicQuest,
            title: 'KarmicQuest Website',
            desc: 'Designed using wordpress'
        },
        {
            img: Archts,
            title: 'Archts Website',
            desc: 'Designed using wordpress'
        }
    ]

    const educationObj = [

        {
            title: 'B.Tech (CSE)',
            from: 'HMR Institute of Technology and Management',
            date: '2021-2024'
        },

        {
            title: 'Diploma (ECE)',
            from: 'Chhotu Ram Rural Institute Of Technology',
            date: '2018-2021'
        },
        {
            title: '10th',
            from: 'Jain Bharati Mrigavati Vidyalaya',
            date: '2021-2024'
        }
    ]

    return (
        <section>
            <div className='about'>
                <h1>About</h1>
                <div className='abt-div'>
                    <span className='arrow'>      </span>

                    <span className='p2'>Currently wrapping up my BTech degree.
                        So, what's my thing? Well, it's all about software development.
                        <span style={{ color: 'rgb(254,200,106)' }}> I'm kind of obsessed with it!
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
                        return (
                            <div className="skillsCard">
                                <img src={item.img} alt="" className="skillsImg" />
                                <div className="skillTitle">{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>


            <section className='ProjectsSec'>
                <div className="Portfolio">Projects</div>
                <div className="projects">
                {projectsObj.map((item, index) => {
                    return (

                        <div class="container">
                            <div class="image-container">
                                <img src={item.img} alt="Image" className='ProImg'/>
                                <div class="overlay">
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>

                    )
                })}
                </div>
            </section>

            <section className='education-section'>
                <h2 className='education-h2'>Education</h2>

                {educationObj.map((item, index) => {
                    return(
                        <div className="container-div">
                        <div className="left-div">
                        <div className="designDiv"></div>
                        <div className="line"></div>
                        </div>
                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.from}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>
                    )
                })}


            </section>
        </section>
    )
}

export default About