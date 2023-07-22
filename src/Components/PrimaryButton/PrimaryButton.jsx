/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import "./style.css"

const PrimaryButton = ({text}) => {
    return (
        <>
            <Button variant="outlined">{text}</Button>
        </>
    );
};

export default PrimaryButton;