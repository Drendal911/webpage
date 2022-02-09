import work from '../styles/components/work.module.scss'
import empImage from '../images/EmployeeManagementSystemMainScreen.png'
import stock from '../images/stocks_graph.jpg'
import ref from '../images/basketball-referee-mid-court.jpg'
import button from "../styles/components/button.module.scss";
import Button from "./Button";

export default function Work() {
    return (
        <div id={"work"} className={work.grid_container}>
            <div>
                <div className={work.title}>My Work</div>
                <div className={work.grid_sub_container}>
                    <a href={'https://drendal911.github.io/stock-watcher/'} target={'_blank'}
                       rel="noopener noreferrer">
                        <img src={stock} alt={"Stock Watcher"}/>
                    </a>
                    <div className={work.text_container}>
                        <div className={work.sub_title}>Stock Watcher</div>
                        <p>A website designed to help keep an eye on stock prices. The front-end if made with React. The back-end is powered by a Node.js AWS Lambda function that sends requests for stock data to a third-party API.</p>
                    </div>
                    <div className={work.button_div}>
                        <Button css={button.dark_rectangle_btn}
                                link={"https://drendal911.github.io/stock-watcher/"}
                                name={"Stock Watcher"}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <div className={work.grid_sub_container}>
                    <a href={'https://drendal911-employee-front-end.herokuapp.com'} target={'_blank'}
                       rel="noopener noreferrer">
                        <img src={empImage} alt={"Employee Management System"}/>
                    </a>
                    <div className={work.text_container}>
                        <div className={work.sub_title}>Employee Management System</div>
                        <p>An example management system that tracks employee compensation. The front-end is based on
                            React.js/Next.js. It sends REST API requests to a Nodejs/Express/Mongoose web server.
                            Data is stored in a MongoDB Atlas(Cloud) database.</p>
                    </div>
                    <div className={work.button_div}>
                        <Button css={button.dark_rectangle_btn}
                                link={"https://drendal911-employee-front-end.herokuapp.com"}
                                name={"Employee Management System"}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <div className={work.grid_sub_container}>
                    <a href={'https://drendal911.github.io/warrenhogue-referee/'} target={'_blank'}
                       rel="noopener noreferrer">
                        <img src={ref} alt={"Referee holding basketball"}/>
                    </a>
                    <div className={work.text_container}>
                        <div className={work.sub_title}>Referee Association Website</div>
                        <p>A personal website built with React, HTML, and SCSS. The site simply lists the referee
                            associations my brother is affiliated with.</p>
                    </div>
                    <div className={work.button_div}>
                        <Button css={button.dark_rectangle_btn}
                                link={"https://drendal911.github.io/warrenhogue-referee/"}
                                name={"Referee Association"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}




