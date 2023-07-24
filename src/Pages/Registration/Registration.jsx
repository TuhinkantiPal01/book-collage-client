import loginImg from "../../assets/registration.png";
import Banner from "../../Components/Banner/Banner";
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/provider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  const { createUser, update ,googleLogin } = useContext(AuthContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        update(data.name, data.image)
          .then(() => {})
          .catch(() => {});

        const newUser = {
          name: data.name,
          email: data.email,
          image: data.image,
          gender: data.gender,
        };

        fetch("https://book-collage-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        Swal.fire({
          icon: "success",
          title: "Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });

        reset();
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        }
      });
  };

  const googleLoginHandler = () => {
    googleLogin()
      .then(() => {navigate(from, { replace: true });})
      .catch((e) => {console.log(e)});
  };

  return (
    <section>
      <Banner title='Registration Your Account' height='96' />

      <div className='flex justify-between gap-x-10 items-center max-w-5xl mx-auto py-16'>
        <div className='flex-1'>
          <img src={loginImg} alt='' />
        </div>
        <div className='flex-1'>
          <div className='shadow-md px-5 py-16 flex flex-col justify-center'>
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id='filled-basic'
                name='name'
                type='text'
                label='Name'
                variant='filled'
                fullWidth
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-red-500'>Name is required.</span>}
              <TextField
                id='filled-basic'
                name='email'
                type='email'
                label='Email'
                variant='filled'
                fullWidth
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-500'>Email is required.</span>}
              <TextField
                id='filled-basic'
                name='image'
                type='url'
                label='Your Image Url'
                variant='filled'
                fullWidth
                {...register("image", { required: true })}
              />
              {errors.image && <span className='text-red-500'>Image Url is required.</span>}
              <TextField
                id='filled-basic'
                name='password'
                type='password'
                label='Password'
                variant='filled'
                fullWidth
                {...register("password", { required: true, pattern: /^.{8,}$/i })}
              />
              <div>
                {errors.password && <span className='text-red-500'>Password is required.</span>} <br />
              </div>
              <div>
                {errors.password?.type === "pattern" && (
                  <span className='text-red-500'>Password Must Need Eight Characters</span>
                )}
              </div>

              <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
                <InputLabel id='demo-select-small-label'>Gender</InputLabel>
                <Select
                  {...register("gender", { required: true })}
                  labelId='demo-select-small-label'
                  id='demo-select-small'
                  label='Gender'
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                </Select>
              </FormControl>
              <div>{errors.gender && <span className='text-red-500'>Gender is required.</span>}</div>
              <div>
                <Checkbox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
                Accept Terms and Conditions
              </div>
              <span className='text-red-500'>{error}</span>
              <Button disabled={!checked} type='submit' variant='contained' color='secondary' fullWidth>
                Registration
              </Button>
            </form>
            <div className='mt-5'>
              <div>
                Already Have An Account? Please{" "}
                <Link to='/login' className='text-blue-500 ml-2'>
                  Login
                </Link>
              </div>
              <div className='mt-4'>
                <Typography variant='h6' className='text-center'>
                  Login With
                </Typography>
              </div>
              <div className='mt-5 flex justify-center gap-x-10'>
                <FcGoogle className="cursor-pointer" onClick={googleLoginHandler} size={50} />
                <AiFillGithub className="cursor-pointer" size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
