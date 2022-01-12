import hamburger from "../styles/components/hamburger.module.scss"

export default function Hamburger() {
    function hideMenu() {
        document.getElementById("navigationToggle").checked = false;
    }
    
    return (
        <>
            <div className={hamburger.navigation}>
                <input type="checkbox" className={hamburger.navigationCheckbox} id="navigationToggle"/>
                <label htmlFor="navigation_Toggle" className={hamburger.navigationButton}>
                    <span className={hamburger.navigationIcon}/>
                </label>
                <div className={hamburger.navigationBackground} />

                <nav className={hamburger.navigationNav}>
                    <ul className={hamburger.navigationList}>
                        <li onClick={hideMenu} className={hamburger.navigationItem}><a href={"# "} className={hamburger.navigationLink}>Home</a></li>
                        <li onClick={hideMenu} className={hamburger.navigationItem}><a href={"#about"} className={hamburger.navigationLink}>About Me</a></li>
                        <li onClick={hideMenu} className={hamburger.navigationItem}><a href={"#skills"} className={hamburger.navigationLink}>Skills</a></li>
                        <li onClick={hideMenu} className={hamburger.navigationItem}><a href={"#work"} className={hamburger.navigationLink}>Projects</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}