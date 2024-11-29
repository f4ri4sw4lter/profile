import { Stack, Button, Container, Typography, FormControl, FormHelperText, Input, NativeSelect } from '@mui/material'

function About() {

    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <Typography variant="h2" component="h2" key="about-name"
                    sx={{
                        fontSize: {
                            xs: '2rem',
                            md: '4rem'
                        }
                    }}
                >
                    Farias Walter Nicolas
                </Typography>

                <Typography variant="h3" component="h3" key="about-job"
                    color='primary'
                    sx={{
                        fontSize: {
                            xs: '1.5rem',
                            md: '3rem'
                        }
                    }}
                >
                    Web Developer
                </Typography>

                <Typography variant="h6" component="h6" key="about-location"
                    sx={{
                        color: 'grey',
                        fontSize: {
                            xs: '1rem',
                            md: '1rem'
                        }
                    }}
                >
                    Paraná, Entre Ríos · (343)154475602 · fariaswalter95@gmail.com
                </Typography>
                <br />

                <Typography>
                    Soy estudiante avanzado de la Licenciatura en Sistemas de la Información y me dedico al desarrollo web fullstack. Mi fortaleza es el backend en PHP pero actualmente estoy en desarrollo de un proyecto personal con NestJS y React que me permitió abrir mas mi repertorio de tecnologías. Me encanta estar en constante aprendizaje y mejora de mis conocimientos, desarrollándome como profesional y como persona.
                </Typography>
                <br />
                <Typography>
                    Además de eso, soy educador scout, lo cual me permitió crecer y desarrollar mi persona y mis habilidades blandas. Mi lugar en el movimiento como Jefe de Rama y Auxiliar distrital mejoro mi trabajo en equipo y mi liderazgo al estar a cargo tanto de jóvenes como de adultos para coordinar y llevar a cabo proyectos, actividades, eventos y dinámicas.
                </Typography>

                <Typography variant="h6" component="h6" key="about-contactme-title"
                    margin={5}
                >
                    Mis redes
                </Typography>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/walter-farias/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/f4ri4sw4lter" target="_blank"><i className="fab fa-github"></i></a>
                    <a className="social-icon" href="https://www.facebook.com/FariasWalterN" target="_blank"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About;