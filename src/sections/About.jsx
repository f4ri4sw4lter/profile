import { Stack, Button, Container, Typography, FormControl, FormHelperText, Input, NativeSelect } from '@mui/material'

function About() {

    return (
        <>
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
                            md: '2rem'
                        }
                    }}
                >
                    Paraná, Entre Ríos · (343)154475602 · fariaswalter95@gmail.com
                </Typography>

                <Typography>
                    I am systems degree student and FullStack Web developer. I like challenges, solve problems and be in constant learning and evolution. I am looking for a job that allows me to improve my knowledge
                </Typography>

                <Typography variant="h6" component="h6" key="about-contactme-title"
                    margin={5}
                >
                    Contact Me
                </Typography>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/walter-farias/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/f4ri4sw4lter" target="_blank"><i className="fab fa-github"></i></a>
                    <a className="social-icon" href="https://www.facebook.com/FariasWalterN" target="_blank"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;