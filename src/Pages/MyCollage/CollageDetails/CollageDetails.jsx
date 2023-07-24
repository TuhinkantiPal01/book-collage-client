import { Link, useParams } from "react-router-dom";
import Banner from "../../../Components/Banner/Banner";
import useCollageDetails from "../../../Components/Hooks/collageDetailsHook";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const CollageDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [data, isLoading] = useCollageDetails(id);
  console.log(data, isLoading);

  return (
    <section>
      <Banner title={data.name} height='96' />

      <div className='max-w-5xl mx-auto my-16 flex justify-center'>
        <Card className='min-h-[550px] w-96 relative' sx={{ minWidth: 600 }}>
          <CardActionArea>
            <CardMedia className='h-52' component='img' height='200' image={data?.image} alt='green iguana' />
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
                {data?.name}
              </Typography>
              <div>
                <Rating
                  initialRating={data?.rating}
                  emptySymbol={<AiOutlineStar />}
                  placeholderSymbol={<AiOutlineStar color='#F1C93B' />}
                  fullSymbol={<AiFillStar color='#F1C93B' />}
                  readonly
                />
              </div>
              Admission Dates:
              {data.admissionDates?.map((dates, index) => (
                <Typography key={index} gutterBottom variant='p' component='div'>
                  {dates}
                </Typography>
              ))}
              <Typography gutterBottom variant='p' component='div'>
                Events:{" "}
                {data.events?.map((event, index) => (
                  <span key={index}>{event},</span>
                ))}
              </Typography>
              <Typography gutterBottom variant='p' component='div'>
                Sports:{" "}
                {data.sports?.map((sport, index) => (
                  <span key={index}>{sport},</span>
                ))}
              </Typography>
            </CardContent>
          </CardActionArea>

          <div className='absolute bottom-0 w-full'>
            <Link to="/admission">
              <Button variant='contained' size='medium' fullWidth>
                Admission Now
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CollageDetails;
