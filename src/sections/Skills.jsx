function Skills() {

    return (
        <>
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5 lang" key="title_ski">Skills</h2>
                <div className="subheading mb-3 lang" key="subtitle_1">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                    <li className="list-inline-item"><i className="fab fa-php"></i></li>
                    <li className="list-inline-item"><i className="fab fa-java"></i></li>
                    <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
                    <li className="list-inline-item"><i className="fab fa-laravel"></i></li>
                </ul>
                <div className="subheading mb-3 lang" key="subtitle_2">Concepts</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        <div className="lang" key="concept_1">Responsive Design.</div>
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        MVC.
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-check"></i></span>
                        <div className="lang" key="concept_3">Object-oriented design.</div>
                    </li>
                </ul>
            </div>
        </section>
        <hr className="m-0" />
        </>
    )
}

export default Skills;