import { Typography, Grid2, Card, CardMedia, CardContent } from '@mui/material'
import EducationCard from '../components/EducationCard';
import educations from '../utils/educations.js';

function Education() {

    return (
        <section className="resume-section" id="education">
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
                        Educación
                    </Typography>
                </Grid2>

                <Grid2 container size={12} alignItems="stretch">
                    {
                        educations.map((education, index) => (
                            <Grid2 size={{ xs: 12, md: 4, lg: 3 }} padding={2} sx={{ display: 'flex', justifyContent: 'center' }} key={education.title}>
                                <EducationCard title={education.title} place={education.place} date={education.date} file={education.file} img={education.img}/>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Grid2>
        </section>
    );
}

export default Education;