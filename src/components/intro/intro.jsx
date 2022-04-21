import "./intro.css";
import introPortrait from "../../images/introPortrait.png"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-background"></div>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="greeting-text">Hello, My Name is <br />
                    <span className="intro-name">Yesenia Vega</span></h2>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Software Developer</div>
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Full-Stack Developer</div>
                            <div className="intro-title-item">Data Engineer</div>
                        </div>
                    </div>
                    {/* <p className="intro-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Doloremque doloribus, distinctio odio recusandae optio 
                        exercitationem nemo rem, excepturi sequi ipsa deserunt 
                        blanditiis libero sunt molestias! Quidem ab laboriosam 
                        nostrum aliquam!
                    </p> */}
                </div>
            </div>
            
            <div className="intro-right">
                {/* <div className="intro-background"></div> */}
                <img src={introPortrait} alt="" className="intro-portrait" />
            </div>
        </div>
    )
}

export default Intro
