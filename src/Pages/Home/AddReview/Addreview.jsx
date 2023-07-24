import { Button, MenuItem, TextField } from "@mui/material";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import "./style.css";
import usecollage from "../../../Components/Hooks/collageHook";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const review = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
];

const AddReview = () => {
  const [data] = usecollage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
    fetch("https://book-collage-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thanks for Your Review",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      reset();
  };

  return (
    <section>
      <PageTitle title='Add Your Review' />

      <div className='my-16 w-[70%] mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-6'>
            <div>
              <TextField
                size='small'
                type='text'
                id='filled-basic'
                label='Name'
                variant='filled'
                name='name'
                {...register("name", { required: true })}
                fullWidth
              />
              <div>{errors.name && <span className='text-red-500'>Name is required.</span>}</div>
            </div>
            <div>
              <TextField
                size='small'
                type='email'
                id='filled-basic'
                label='Email'
                variant='filled'
                name='email'
                {...register("email", { required: true })}
                fullWidth
              />
              <div>{errors.email && <span className='text-red-500'>Email is required.</span>}</div>
            </div>
            <div>
              <TextField
                id='filled-select-currency'
                select
                label='Select collage'
                helperText='Please select collage'
                variant='filled'
                size='small'
                name='collage'
                fullWidth
                {...register("collage", { required: true })}
              >
                {data.map(({ name }) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
              <div>{errors.collage && <span className='text-red-500'>Please Select collage</span>}</div>
            </div>
            <div>
              <TextField
                id='filled-select-currency'
                select
                label='Rating'
                helperText='Please Select Rating'
                variant='filled'
                size='small'
                name='rating'
                {...register("rating", { required: true })}
                fullWidth
              >
                {review.map(({ value, label }) => (
                  <MenuItem key={label} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
              <div>{errors.rating && <span className='text-red-500'>Select Your Rating Star</span>}</div>
            </div>
          </div>
          <TextField
            id='outlined-textarea'
            label='Write Your Review'
            placeholder='Review'
            multiline
            fullWidth
            name='review'
            {...register("review", { required: true })}
          />{" "}
          {errors.review && <span className='text-red-500'>Please Write Your Review</span>}
          <div className='mt-10'>
            <Button type='submit' variant='contained' color='success' fullWidth>
              Add A Review
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
