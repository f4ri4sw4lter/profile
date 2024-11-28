import { Typography, Grid2, Card, CardMedia, CardContent } from '@mui/material'
import EducationCard from '../components/EducationCard';
import educations from '../utils/educations.js';

function Education() {

    return (
        <>
            <section className="resume-section" id="education">
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
                            Educacion
                        </Typography>
                    </Grid2>

                    <Grid2 container size={12} alignItems="stretch">
                        {
                            educations.map((education, index) => (
                                <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} padding={2} sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <EducationCard key={education.title} title={education.title} place={education.place} date={education.date} file={education.file} img={education.img} />
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Grid2>
            </section>
        </>
    );
}

export default Education;