import { Button, MenuItem, TextField } from "@mui/material";
import Banner from "../../../Components/Banner/Banner";
import { AuthContext } from "../../../Components/provider/AuthProvider";
import useCollage from "../../../Components/Hooks/collageHook";
import { useContext, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const subjects = [
  {
    value: "Computer Science and Engineering",
    label: "Computer Science and Engineering",
  },
  {
    value: "Electrical and Electronic Engineering",
    label: "Electrical and Electronic Engineering",
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering",
  },
  {
    value: "Mechanical Engineering",
    label: "Mechanical Engineering",
  },
  {
    value: "Architecture",
    label: "Architecture",
  },
  {
    value: "Business Administration",
    label: "Business Administration",
  },
  {
    value: "Economics",
    label: "Economics",
  },
  {
    value: "Accounting and Finance",
    label: "Accounting and Finance",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Human Resource Management",
    label: "Human Resource Management",
  },
];

const Admission = () => {
  const [data] = useCollage();
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate()
 

  console.log(data);

  const initialState = {
    name: user?.displayName,
    email: user?.email,
    number: "",
    address: "",
    date: "",
    image: user?.photoURL,
    collage: "",
    subject: "",
  };

  

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TERM":
        return {
          ...state,
          term: !state.term,
        };
      default:
        return state;

        
    }
    
  };

  const [state, dispatch] = useReducer(reducer, initialState);



  const admissionHandler = (e) => {
    e.preventDefault();

    if (state.name === "" || state.email === "" || state.number === "" || state.address === "" || state.date === "" || state.image === "" || state.collage === "" || state.subject === "") {
      setError("All Field Must Be Required");
      return;
    }

    fetch("https://book-collage-server.vercel.app/admission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(state),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                icon: 'success',
                title: 'Admission Successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/myCollage",{replace: true})
            }

          });
  }



  return (
    <div>
      <Banner title='Admission Now' subtitle='Your Favorite Collage' height='96' />
      <div className='my-16 w-[70%] mx-auto'>
        <form>
          <div className='grid grid-cols-2 gap-x-10 gap-y-12 mb-6'>
            <TextField
              size='small'
              type='text'
              id='filled-basic'
              label='Name'
              name='name'
              variant='filled'
              defaultValue={user?.displayName}
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <TextField
              size='small'
              type='email'
              id='filled-basic'
              name='email'
              label='Email'
              variant='filled'
              defaultValue={user?.email}
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />

            <TextField
              size='small'
              name='number'
              type='number'
              id='filled-basic'
              label='Phone Number'
              variant='filled'
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <TextField
              size='small'
              type='text'
              id='filled-basic'
              label='Address'
              variant='filled'
              name='address'
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <TextField
              size='small'
              type='date'
              id='filled-basic'
              variant='filled'
              helperText='Please select Date Of Birth'
              name='date'
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <TextField
              size='small'
              type='url'
              id='filled-basic'
              name='image'
              label='Your Image Url'
              variant='filled'
              helperText='Please Provide Your Image Url'
              defaultValue={user?.photoURL}
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <TextField
              id='filled-select-currency'
              select
              name="collage"
              label='Select Collage'
              helperText='Please select Collage'
              variant='filled'
              size='small'
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              {data.map(({ name }) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='filled-select-currency'
              select
              label='Subject Name'
              helperText='Please Select Subject Name'
              variant='filled'
              name="subject"
              size='small'
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              {subjects.map(({ value }) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <span className="text-red-500">{error}</span>
          <div className='mt-10'>
            <Button onClick={admissionHandler} variant='contained' color='secondary' fullWidth>
              Admission
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
