

export default function Button(props) {
    return (
            <div className={props.css}>
                <a href={props.link} target={'_blank'} rel={'noopener noreferrer'}>{props.name}</a>
            </div>
    )
}
