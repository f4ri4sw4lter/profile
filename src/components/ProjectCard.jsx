import { Typography, Grid2, Card, CardMedia, CardContent, Link } from '@mui/material'

function ProjectCard({ name, title, description, date, href, img }) {

    const descriptionClass = "description-" + name;

    return (
        <Card 
            onClick={() => {
                window.location.href = href;
            }}
            sx={{
                maxWidth: 300,
                width: '100%',
                transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.5)',
                    },
            }}
        >
            <CardMedia
                sx={{ 
                    height: 140,
                    borderBottom: '1px solid #ccc',
                }}
                image={"../../public/" + img}
                title="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div" color="primary" fontSize={'18px'}>
                    {title}
                </Typography>
                <Typography className={descriptionClass} fontSize={'16px'}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard;