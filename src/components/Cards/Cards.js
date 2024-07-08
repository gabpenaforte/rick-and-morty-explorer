import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Heart } from "iconsax-react";
import axios from "axios";

export default function ActionAreaCard() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      const data = response.data;

      setCharacters(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

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
              <Heart color="#B22222" variant="Bold" /> {character?.status}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
