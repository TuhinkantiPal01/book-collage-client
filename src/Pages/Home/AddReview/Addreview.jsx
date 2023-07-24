import { Button, MenuItem, TextField } from "@mui/material";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import "./style.css";
import useCollage from "../../../Components/Hooks/collageHook";



const review=[
  {
    value: 1,
    label:1,
  },
  {
    value: 2,
    label:2,
  },
  {
    value: 3,
    label:3,
  },
  {
    value: 4,
    label:4,
  },
  {
    value: 5,
    label:5,
  }
]

const AddReview = () => {
  const [data] = useCollage();
  
  return (
    <section>
      <PageTitle title='Add Your Review' />

      <div className='my-16 w-[70%] mx-auto'>
        <form>
          <div className='grid grid-cols-2 gap-x-10 gap-y-12 mb-6'>
            <TextField size='small' type='text' id='filled-basic' label='Name' variant='filled' />
            <TextField size='small' type='email' id='filled-basic' label='Email' variant='filled' />
            <TextField
              id='filled-select-currency'
              select
              label='Select Collage'
              defaultValue='EUR'
              helperText='Please select Collage'
              variant='filled'
              size='small'
            >
              {data.map(({name}) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='filled-select-currency'
              select
              label='Rating'
              defaultValue='EUR'
              helperText='Please Select Rating'
              variant='filled'
              size='small'
            >
              {review.map(({value , label}) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField id='outlined-textarea' label='Write Your Review' placeholder='Review' multiline fullWidth />{" "}
          <div className='mt-10'>
            <Button variant='contained' color='success' fullWidth>
              Add A Review
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
