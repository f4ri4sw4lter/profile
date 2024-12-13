import { Typography, Grid2, Card, CardMedia, CardContent } from '@mui/material'

function EducationCard({ title, place, date, file, img }) {

    return (
        <Card sx={{
            maxWidth: 300,
            width: '100%',
            transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.1)',
                },
        }}>
            <CardMedia
                sx={{ 
                    height: 140,
                    borderBottom: '1px solid #ccc',
                }}
                image={"../../public/logos/" + img}
                title="certificate"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" component="div" color="primary" fontSize={'18px'}>
                    {title}
                </Typography>
                <Typography fontSize={'16px'}>
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