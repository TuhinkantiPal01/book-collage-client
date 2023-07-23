/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Rating } from "@mui/material";
import img from "../../assets/collage.jpg";
import "./Style.css";

const CollageCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map(({ name, rating, researchHistory, admissionDates }, index) => (
        <Card className='min-h-[450px] relative' key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component='img' height='140' image={img} alt='green iguana' />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {name}
              </Typography>
              <div><Rating name='read-only' value={rating} readOnly /></div>
              Admission Dates:
              {admissionDates.map((dates , index) => (
                <Typography key={index} gutterBottom variant='p' component='div'>
                  {dates}
                </Typography>
              ))}
              <Typography gutterBottom variant='p' component='div'>
                ReSearch: {researchHistory?.length}
              </Typography>
            </CardContent>
          </CardActionArea>

          <div className='absolute bottom-0 w-full'>
            <Button variant='contained' size='medium' fullWidth>
              View Details
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CollageCard;
