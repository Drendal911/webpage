import footer from "../../styles/layout/Footer.module.scss"
import linkedInIcon from "../../images/icons/linkedin-3-xxl.png";
import gitHubIcon from "../../images/icons/github-icon.png";
import fBIcon from "../../images/icons/facebook-logo-white.png";

export default function Footer(props) {
    return (
        <div className={footer.position_container}>
            <div className={footer.container}>
                <div className={footer.contact}>
                    {props.title ? <h1 className={footer.title}>{props.title}</h1> : null}
                    {props.email ? <address><a href={`mailto:${props.email}`}>{props.email}</a></address> : null}
                </div>
                <div className={footer.all_icons_container}>
                    <a href="https://www.linkedin.com/in/quentin-h-200591187/" target="_blank"
                       rel="noopener noreferrer" className={footer.icon_container}>
                        <img src={linkedInIcon} width="33px" alt={"LinkedIn Icon"}/>
                    </a>
                    <a href="https://github.com/Drendal911" target="_blank" rel="noopener noreferrer"
                       className={footer.icon_container}>
                        <img src={gitHubIcon} width="55px" alt={"GitHub Icon"}/>
                    </a>
                    <a href="https://www.facebook.com/quentin.hogue" target="_blank" rel="noopener noreferrer"
                       className={footer.icon_container}>
                        <img src={fBIcon} width="50px" alt="Facebook Icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

