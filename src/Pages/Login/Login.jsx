import loginImg from "../../assets/login.png";
import Banner from "../../Components/Banner/Banner";
import { Button, TextField, Typography } from "@mui/material";
import "./style.css"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Login = () => {
  return (
    <section>
      <Banner title='Login Your Account' height='96' />

      <div className='flex justify-between gap-x-10 items-center max-w-5xl mx-auto py-16'>
        <div className='flex-1'>
          <img src={loginImg} alt='' />
        </div>
        <div className='flex-1'>
          <div className='shadow-md px-5 py-16 flex flex-col justify-center'>
            <form className='space-y-5'>
              <TextField id='filled-basic' type='email' label='Email' variant='filled' fullWidth />
              <TextField id='filled-basic' type='password' label='Password' variant='filled' fullWidth />
                <Button type="submit" variant="contained" color="success" fullWidth>Login</Button>
            </form>
            <div className="mt-5">
                <div>No Account? Please <Link to="/registration" className="text-blue-500 ml-2">Registration</Link></div>
                <div className="mt-4"><Typography variant="h6" className="text-center">Login With</Typography></div>
                <div className="mt-5 flex justify-center gap-x-10">
                    <FcGoogle size={30}/>
                    <AiFillGithub size={30}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
