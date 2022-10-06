import React from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css"
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hello,My Name is James</h2>

                <div className="prompt">
                    <p>
                        A Software Developer With a passion
                        for learning and creating
                    </p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                        ReactJs, Tailwind Css, HTML, Bootstrap, MaterialUI,
                        StyledComponents
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        Ruby, Rails, Python, MongoDb, AWS, MySQL, NodeJs/Express
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>Ruby, JavaScript, Python</span>
                </li>
            </ol>
        </div>
</div >
        
    );
}

export default Home;