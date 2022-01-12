import app from './styles/layout/App.module.scss';
import Header from "./components/layout/Header";
import Hamburger from "./components/Hamburger";
import SectionCard from "./components/SectionCard";
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/layout/Footer";


function App() {
    return (
        <div className="App">
            <div className={app.main_container}>
                <div className={app.background}/>
                <Hamburger/>
                <Header/>
                <div className={app.content_wrap}>
                    <SectionCard content={<AboutMe/>}/>
                    <SectionCard content={<Skills/>}/>
                    <SectionCard content={<Work/>}/>

                    <Footer title={"Contact Me"}
                            email={"hoguequentin@hotmail.com"}/>
                </div>
                {/*End: content_wrap*/}
            </div>
            {/*End: main_container*/}
        </div>
    );
}

export default App;
