function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            
            <button className="btn btn-primary translate" id="en">English</button>
            <button className="btn btn-primary translate" id="es">Español</button>

            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger lang" href="#about" key="menu_abo">About me</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger lang" href="#experience" key="menu_exp">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger lang" href="#education" key="menu_edu">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger lang" href="#skills" key="menu_ski">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger lang" href="#interests" key="menu_int">Interest</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;