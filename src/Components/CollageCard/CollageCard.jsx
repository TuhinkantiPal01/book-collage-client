/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import img from "../../assets/collage.jpg";
import "./Style.css";

const CollageCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map(({ college_name, rating }, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component='img' height='140' image={img} alt='green iguana' />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {college_name}
              </Typography>
              <Rating name='read-only' value={rating} readOnly />
              <Typography gutterBottom variant='p' component='div'>
                Admission Date : 10-10-2023
              </Typography>
              <Typography gutterBottom variant='p' component='div'>
                ReSearch : 10
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant='contained' fullWidth>
              View Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default CollageCard;
