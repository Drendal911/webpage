import skills from '../styles/components/skills.module.scss'
import javascriptIcon from '../images/icons/javascript_icon.png'
import javaIcon from '../images/icons/java_icon.png'
import html5Icon from '../images/icons/html5_icon.png'
import css3Icon from '../images/icons/css3_icon.png'
import sassIcon from '../images/icons/sass_icon.png'
import reactIcon from '../images/icons/react_icon.png'
import nextjsIcon from '../images/icons/nextjs_icon.png'
import nodejsIcon from '../images/icons/nodejs_icon.png'
import expressjsIcon from '../images/icons/expressjs_icon.png'
import mongodbIcon from '../images/icons/mongodb_icon.png'
import dynamodbIcon from '../images/icons/dynamodb_icon.png'
import moreIcon from '../images/icons/more.png'

export default function Skills() {
    return (
        <div id={"skills"} className={skills.grid_container}>
            <div className={skills.title}>My Skills</div>
            <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} target={'_blank'}
               rel="noopener noreferrer">
                <img src={javascriptIcon} alt={'Javascript Icon'} className={skills.icon_container}/>
            </a>
            <a href='https://www.oracle.com/java/' target={'_blank'} rel="noopener noreferrer">
                <img src={javaIcon} alt={'Java Icon'}  className={skills.icon_container}/>
            </a>
            <a href={'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'} target={'_blank'} rel="noopener noreferrer">
                <img src={html5Icon} alt={'HTML5 Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://www.w3schools.com/css/css_intro.asp'} target={'_blank'} rel="noopener noreferrer">
                <img src={css3Icon} alt={'CSS3 Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://sass-lang.com/'} target={'_blank'} rel="noopener noreferrer">
                <img src={sassIcon} alt={'SASS Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://reactjs.org/'} target={'_blank'} rel="noopener noreferrer">
                <img src={reactIcon} alt={'React Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://nextjs.org/'} target={'_blank'} rel="noopener noreferrer">
                <img src={nextjsIcon} alt={'NextJS Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://nodejs.org/en/about/'} target={'_blank'} rel="noopener noreferrer">
                <img src={nodejsIcon} alt={'NodeJS Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://expressjs.com/'} target={'_blank'} rel="noopener noreferrer">
                <img src={expressjsIcon} alt={'ExpressJS Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://www.mongodb.com/'} target={'_blank'} rel="noopener noreferrer">
                <img src={mongodbIcon} alt={'MongoDB Icon'} className={skills.icon_container}/>
            </a>
            <a href={'https://aws.amazon.com/dynamodb/'} target={'_blank'} rel="noopener noreferrer">
                <img src={dynamodbIcon} alt={'DynamoDB Icon'} className={skills.icon_container}/>
            </a>
            <div className={skills.wrapper}>
                <img id="ellipsis" src={moreIcon} alt={'Ellipsis'} className={skills.more_icon_container}/>
                <div className={skills.more_icon_reverse_side}>
                    <div className={skills.reverse_icon_text}>View Resume for more</div>
                </div>
            </div>

        </div>
    )
}