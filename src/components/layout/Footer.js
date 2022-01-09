import footer from "../../styles/layout/Footer.module.scss"

export default function Footer(props) {
    return (
        <div className={footer.position_container}>
            <div className={footer.container}>
                <div className={footer.contact}>
                    {props.title ? <h1 className={footer.title}>{props.title}</h1> : null}
                    {props.email ? <address><a href={`mailto:${props.email}`}>{props.email}</a></address> : null}
                </div>
                <div className={footer.all_icons_container}>{props.links}</div>
            </div>
        </div>
    )
}

