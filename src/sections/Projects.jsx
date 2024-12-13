import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography, Grid2, Link } from '@mui/material'
import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';

function Projects() {

    return (
        <section className="resume-section" id="Projects">
            <Grid2 container>
                <Grid2 size={12}
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
                        Proyectos
                    </Typography>
                </Grid2>

                <Grid2 container size={12} alignItems="stretch">
                    {
                        projects.map((project, index) => (
                            <Grid2 size={{ xs: 12, md: 4, lg: 3 }} padding={2} sx={{ display: 'flex', justifyContent: 'center' }} key={project.title}>
                                <ProjectCard
                                    title={project.title} 
                                    description={project.description} 
                                    date={project.date} 
                                    href={project.href} 
                                    img={project.img} 
                                    name={project.name}
                                />
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Grid2>
        </section>
    )
}

export default Projects;