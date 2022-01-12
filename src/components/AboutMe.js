import about from "../styles/components/me.module.scss"
import button from "../styles/components/button.module.scss"
import quentin from "../images/Quentin.jpg"
import Button from "./Button";

export default function AboutMe() {
    return (
        <div id={"about"} className={about.grid_container}>
            <div className={about.title}>About Me</div>
            <div className={about.image_container}>
                <img src={quentin} alt="Quentin Hogue"/>
            </div>
            <div className={about.text_container}>
                <div className={about.sub_title}>Software Developer, IBM</div>
                {`Going from the military to police work to software development has been a long and unexpected journey. I started my career as a Cryptologic Linguist in the US Air Force, where I learned to speak fluent Spanish. After my military tenure, I joined the Memphis Police Department as a Uniform Patrol Officer. Then, in 2016 I had a chance encounter with a friend from the military. She told me she went back to school after her enlistment and became a Software Developer. She said I might like it and should give it a try. She was right on both accounts. Taking her advice, I bought a book called "Programming and Problem Solving with C++" and wrote my first program. It was the same program every developer starts with, "Hello World!". At that point, I was interested, but the hook didn't come until later when I wrote a program that calculated tax brackets based on income. That's when I realized this was a career I wanted to pursue. I enrolled in school the next semester and haven't looked back since! I am now a Software Developer with IBM, getting paid to do something I enjoy.`}
            </div>
            <div className={about.button_div}>
                <Button css={button.dark_rectangle_btn}
                        link={"/QuentinHogueResume.pdf"}
                        name={"View Resume"}/>
            </div>
        </div>
    )
}