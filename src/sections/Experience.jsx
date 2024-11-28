import { Typography, Grid2, Link } from '@mui/material'

function Experience() {
    return (
        <>
            <section className="resume-section" id="experience">
                <Grid2 container>
                    <Grid2 item size={12}
                        sx={{ textAlign: 'center' }}
                    >
                        <Typography variant="h2" component="h2" key="experience-title" marginBottom={5}
                            sx={{
                                fontSize: {
                                    xs: '2rem',
                                    md: '4rem'
                                }
                            }}
                        >
                            Experiencia
                        </Typography>
                    </Grid2>

                    <Grid2 container marginBottom={5}>
                        <Grid2 item size={{ xs: 12, md: 4 }} textAlign={'left'}>
                            <Typography variant="h4" component="h4" key="job-1" fontSize={'20px'} color={"primary"}>
                                Soporte IT y Desarrollador Web en el área informática
                            </Typography>
                            <Link href="https://uader.edu.ar/contacto" target="_blank" underline="none"
                                color={'link'}
                            >
                                Rectorado de la Universidad Autonoma de Entre Ríos
                            </Link>
                            <Typography>
                                Marzo 2021 - Febrero 2022
                            </Typography>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 8 }} textAlign={'left'}>
                            <ul>
                                <li>
                                    <Typography>Soporte técnico informático y de redes.</Typography>
                                </li>
                                <li>
                                    <Typography>Mantenimiento y mejora de los sistemas web de la universidad con PHP.</Typography>
                                </li>
                                <li>
                                    <Typography>Armado y ejecución de querys en bases de datos PostgreSQL.</Typography>
                                </li>
                            </ul>
                            <Grid2 container sx={{ paddingLeft: '40px', display: 'flex', gap: '5px' }}>
                                <i className="skill-icon fab fa-php"></i>
                                <i className="skill-icon fab fa-html5"></i>
                                <i className="skill-icon fab fa-css3-alt"></i>
                            </Grid2>
                        </Grid2>
                    </Grid2>



                    <Grid2 container marginBottom={5}>
                        <Grid2 item size={{ xs: 12, md: 4 }} textAlign={'left'}>
                            <Typography variant="h4" component="h4" key="job-1" fontSize={'20px'} color={"primary"}>
                                Desarrollador Backend
                            </Typography>
                            <Link href="https://aper.com/" target="_blank" underline="none"
                                color={'link'}
                            >
                                APER
                            </Link>
                            <Typography>
                                Noviembre 2021 - Diciembre 2022
                            </Typography>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 8 }} textAlign={'left'}>
                            <ul>
                                <li>
                                    <Typography>
                                        Manejo y desarrollo de mejoras de API desarrollada en AdonisJS con una base de datos MongoDB.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Deploy productivos de desarrollos.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Análisis de código.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Documentación de código.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Llevar adelante ceremonias de metodología SCRUM.
                                    </Typography>
                                </li>
                            </ul>
                            <Grid2 container sx={{ paddingLeft: '40px', display: 'flex', gap: '5px' }}>
                                <i className="skill-icon fab fa-php"></i>
                                <i className="skill-icon fab fa-js-square"></i>
                                <i className="skill-icon fab fa-node-js"></i>
                                <img src="/public/icons/php-logo.svg" alt="" className="skill-icon"/>
                                
                                <i className="skill-icon fab fa-html5"></i>
                                <i className="skill-icon fab fa-css3-alt"></i>
                                <i className="skill-icon fab fa-laravel"></i>
                            </Grid2>
                        </Grid2>
                    </Grid2>

                    <Grid2 container marginBottom={5}>
                        <Grid2 item size={{ xs: 12, md: 4 }} textAlign={'left'}>
                            <Typography variant="h4" component="h4" key="job-1" fontSize={'20px'} color={"primary"}>
                                Desarrollador Web SSR
                            </Typography>
                            <Link href="https://itpatagonia.com/" target="_blank" underline="none"
                                color={'link'}
                            >
                                IT Patagonia
                            </Link>
                            <Typography>
                                Febrero 2023 - Presente
                            </Typography>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 8 }} textAlign={'left'}>
                            <ul>
                                <li>
                                    <Typography>
                                        Mantenimiento, desarrollo de módulos y fix de issues de e-commerce desarrollado con Prestashop y MySQL.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Manejo y mejoras de APIs desarrolladas en AdonisJS con base de datos MongoDB.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Análisis de código.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Optimización de código.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Documentación de código.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Metodología SCRUM utilizando Jira para gestión de los tickets.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Desarrollo Frontend (HTML, CSS, JS y Vue) y Backend (PHP, nodeJS y Python).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Manejo de algunas ceremonias del equipo.
                                    </Typography>
                                </li>
                            </ul>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </section>
        </>
    );
}

export default Experience;