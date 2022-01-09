import app from './styles/layout/App.module.scss';
import footer from './styles/layout/Footer.module.scss'
import Hamburger from "./components/Hamburger";
import Header from "./components/layout/Header";
import SectionCard from "./components/SectionCard";
import AboutMe from "./components/AboutMe"
import Footer from "./components/layout/Footer";
import linkedInIcon from "./images/icons/linkedin-3-xxl.png"
import gitHubIcon from "./images/icons/github-icon.png"
import fBIcon from "./images/icons/facebook-logo-white.png"


function App() {
    return (
        <div className="App">
            <div className={app.main_container}>
                <div className={app.background}/>
                <Hamburger/>
                <Header/>
                <div className={app.content_wrap}>
                    <SectionCard content={<AboutMe/>}/>
                    <SectionCard content={<AboutMe/>}/>

                    <Footer title={"Contact Me"}
                            email={"hoguequentin@hotmail.com"}
                            links={<>
                                <a href="https://www.linkedin.com/in/quentin-h-200591187/" target="_blank"
                                   rel="noopener noreferrer" className={footer.icon_container}>
                                    <img src={linkedInIcon} width="33px" alt={"LinkedIn Icon"}/>
                                </a>
                                <a href="https://github.com/Drendal911" target="_blank" rel="noopener noreferrer"
                                   className={footer.icon_container}>
                                    <img src={gitHubIcon} width="55px" alt={"GitHub Icon"}/>
                                </a>
                                <a href="https://www.facebook.com/quentin.hogue" target="_blank"
                                   className={footer.icon_container}>
                                    <img src={fBIcon} width="50px" alt="Facebook Icon"/>
                                </a>
                            </>}/>


                </div>

            </div>
        </div>
    );
}

export default App;
