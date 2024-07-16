import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Heart, HeartSlash, Unlimited } from "iconsax-react";


export default function ActionAreaCard({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <Card
          key={character?.id}
          sx={{ maxWidth: 345, marginTop: 5, marginLeft: 10, marginBottom: 5 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={character?.image}
              alt="character"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character?.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {character?.location.name}
              </Typography>
            </CardContent>
            <CardActions>
              {(() => {
                if (character?.status === "Dead") {
                  return <HeartSlash color="#A9A9A9" variant="Bold" />;
                } else if (character?.status === "Alive") {
                  return <Heart color="#B22222" variant="Bold" />;
                } else {
                  return <Unlimited color="#6495ED" variant="Bold" />;
                }
              })()}
              <Typography variant="caption">{character?.status}</Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
