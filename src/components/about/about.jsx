import "./about.css"
import about_image from "../../images/wallArt.jpg"

const About = () => {
    return (
        <div className="about-section">
            <div className="about-left">
                <div className="about-card background"></div>
                <div className="about-card">
                    <img src={about_image} alt=""  className="about-image"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ducimus? 
                </p>
                <p className="about-description">
                Visionary and results-oriented professional. The feeling of creating applications and being able to see through them, is the fuel to my engine. I take pride and joy in the projects I develop as they are my upmost motivation. My bread and butter is problem solving, so bring on the puzzle!
                <br />
                <br /> I am passionate about working with others to learn, find success, and grow together. My ability as a fast learner makes me an asset to any team. 
                <br />
                <br /> In my down time, I take joy in cooking (also trying local restaurants), going on hikes with my dog, playing/coaching volleyball, taking long walks in the beach, and traveling when there isn't so many covid restrictions. 
                </p>
            </div>
        </div>
    )
}

export default About