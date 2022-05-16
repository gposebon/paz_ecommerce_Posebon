import { Button, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';




const Items = ({ verduras }) => {
    return (
        <>
            
                {verduras.map((verdura) => (
                <Grid item  xs={2} sm={4} md={4} key={verdura.id} >
                    <Card sx={{ maxWidth: 250}} >
                        <CardMedia
                            component="img"
                            height="200"
                            image={verdura.imagen}
                            alt={verdura.alt}
                            sx={{pb:2}}
                        />
                        <CardContent sx={{ border: 1}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {verdura.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Precio: {verdura.precio}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Detalles</Button>
                        </CardActions>
                        <ItemCount inicial="1" stock="10"></ItemCount>
                    </Card>
                </Grid>
                ))}
        </>
    )
}

export default Items