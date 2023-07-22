import { Typography } from "@mui/material";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#27374D] py-10'>
      <div className='w-[70%] mx-auto text-[#FFFFFF] flex justify-evenly items-center'>
        <div>
          <Typography
            variant='h5'
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#white",
              textDecoration: "none",
            }}
          >
            BookMyCollage
          </Typography>
          <div className="flex gap-x-5 mt-5 justify-between">
            <BsFacebook size={25}/>
            <BsInstagram size={25}/>
            <BsTwitter size={25}/>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-4">Links</h4>
          <ul className="text-blue-500">
            <li>Home</li>
            <li>Collages</li>
            <li>Admission</li>
            <li>My Collages</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-4">Contact</h4>
          <ul>
            <li>01834-245438</li>
            <li>Dhaka , Bangladesh</li>
            <li>tkuhinkantipal886@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 mt-3 flex justify-center items-center">
            <p className="pt-4 text-white">CopyRight&#169;2023 All Right Reserved By Tuhin Kanti Pal</p>
      </div>
    </div>
  );
};

export default Footer;
