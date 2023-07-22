import { Button, MenuItem, TextField } from "@mui/material";
import Banner from "../../../Components/Banner/Banner";

const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];


const Admission = () => {
  return (
    <div>
      <Banner title='Admission Now' subtitle='Your Favorite Collage' height='96' />
      <div className='my-16 w-[70%] mx-auto'>
        <form>
          <div className='grid grid-cols-2 gap-x-10 gap-y-12 mb-6'>
            <TextField size='small' type='text' id='filled-basic' label='Name' variant='filled' />
            <TextField size='small' type='email' id='filled-basic' label='Email' variant='filled' />
            <TextField size='small' type='number' id='filled-basic' label='Phone Number' variant='filled' />
            <TextField size='small' type='text' id='filled-basic' label='Address' variant='filled' />
            <TextField size='small' type='date' id='filled-basic'  variant='filled' helperText='Please select Date Of Birth' />
            <TextField size='small' type='url' id='filled-basic' label="Your Image Url"  variant='filled' helperText='Please Provide Your Image Url' />
            <TextField
              id='filled-select-currency'
              select
              label='Select Collage'
              defaultValue='EUR'
              helperText='Please select Collage'
              variant='filled'
              size='small'
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='filled-select-currency'
              select
              label='Subject Name'
              defaultValue='EUR'
              helperText='Please Select Subject Name'
              variant='filled'
              size='small'
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mt-10'>
            <Button variant='contained' color='secondary' fullWidth>
              Admission
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
