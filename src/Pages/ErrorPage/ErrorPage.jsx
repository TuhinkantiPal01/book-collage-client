import { Button } from "@mui/material";
import errorImage from "../../assets/error.png"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="h-screen">
            <div>
                <div className="flex justify-center items-center">
                    <img className="h-96" src={errorImage} alt="" />
                </div>
                <div className="flex justify-center mt-10">
                    <Link to="/"><Button variant="outlined" color="error" size="small">Back to Home</Button></Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;