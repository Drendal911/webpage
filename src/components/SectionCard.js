import section from '../styles/components/section_card.module.scss'

export default function SectionCard(props) {
    return (
        <div className={section.card_container}>
            {props.content}
        </div>
    )
}
