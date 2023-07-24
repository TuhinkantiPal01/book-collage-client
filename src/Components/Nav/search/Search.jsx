import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import usecollage from "../../Hooks/collageHook";
import "./style.css"

const Search = () => {
  const [data] = usecollage();
  return (
    <div className="mr-8">
      <Stack spacing={2} sx={{ width: 200 }}>
        <Autocomplete
          size='small'
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          options={data?.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
            {...params}
             label='Search College'
             InputProps={{
               ...params.InputProps,
               type: "search",
             }}
           />
          )}
        />
      </Stack>
    </div>
  );
};

export default Search;
