import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Heart } from 'iconsax-react';

import rick from "../../assets/rick.jpg";


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 25, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={rick}
          alt="character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nome do personagem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location:
          </Typography>
          <Heart color="#B22222" variant="Bold"/> Alive
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
