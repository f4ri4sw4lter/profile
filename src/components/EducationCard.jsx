import { Typography, Grid2, Card, CardMedia, CardContent } from '@mui/material'

function EducationCard({ title, place, date, file, img }) {

    return (
        <Card sx={{ 
            maxWidth: 345,
            transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.1)', // Aumenta el tamaño al hacer hover
                },
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={"../../public/" + img}
                title="certificate"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" color="primary">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {place}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '13px' }}>
                    {date}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EducationCard;