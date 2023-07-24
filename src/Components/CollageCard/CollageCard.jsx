
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import "./Style.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const CollageCard = ({ data }) => {
  

  return (
    <>
      {data.map(({ name,rating, researchHistory, admissionDates, image, _id }, index) => (
        <Card className='min-h-[450px] w-96 relative' key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia className='h-40' component='img' height='140' image={image} alt='green iguana' />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {name}
              </Typography>
              <div>
              <Rating
                  initialRating={rating}
                  emptySymbol={<AiOutlineStar/>}
                  placeholderSymbol={<AiOutlineStar color="#F1C93B"/>}
                  fullSymbol={<AiFillStar color="#F1C93B"/>}
                  readonly
                />
              </div>
              Admission Dates:
              {admissionDates.map((dates, index) => (
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
            <Link to={`/collageDetails/${_id}`}>
              <Button variant='contained' size='medium' fullWidth>
                View Details
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CollageCard;
