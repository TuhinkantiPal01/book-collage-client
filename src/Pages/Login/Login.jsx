import loginImg from "../../assets/login.png";
import Banner from "../../Components/Banner/Banner";
import { Button, TextField, Typography } from "@mui/material";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, googleLogin ,githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          setError("User not found");
        }

        if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        }
      });
  };
  const googleLoginHandler = () => {
    googleLogin()
      .then(() => {navigate(from, { replace: true });})
      .catch((e) => {console.log(e)});
  };

  const githubLoginHandler = () => {
    githubLogin()
    .then(()=>{})
    .catch((e) => {console.log(e)});
  }

  return (
    <section>
      <Banner title='Login Your Account' height='96' />

      <div className='flex justify-between gap-x-10 items-center max-w-5xl mx-auto py-16'>
        <div className='flex-1'>
          <img src={loginImg} alt='' />
        </div>
        <div className='flex-1'>
          <div className='shadow-md px-5 py-16 flex flex-col justify-center'>
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name='email'
                id='filled-basic'
                type='email'
                label='Email'
                variant='filled'
                fullWidth
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-500'>Email is required.</span>}
              <TextField
                name='password'
                id='filled-basic'
                type='password'
                label='Password'
                variant='filled'
                fullWidth
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-500'>Password is required.</span>}

              <div>
                <span className='text-red-500'>{error}</span>
              </div>
              <Button type='submit' variant='contained' color='success' fullWidth>
                Login
              </Button>
            </form>
            <div className='mt-5'>
              <div>
                No Account? Please{" "}
                <Link to='/registration' className='text-blue-500 ml-2'>
                  Registration
                </Link>
              </div>
              <div className='mt-4'>
                <Typography variant='h6' className='text-center'>
                  Login With
                </Typography>
              </div>
              <div className='mt-5 flex justify-center gap-x-10'>
                <FcGoogle className="cursor-pointer" onClick={googleLoginHandler} size={50} />
                <AiFillGithub className="cursor-pointer" onClick={githubLoginHandler} size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
