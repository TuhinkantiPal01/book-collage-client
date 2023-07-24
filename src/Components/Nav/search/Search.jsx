import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import useCollage from "../../Hooks/collageHook";
import "./style.css"

const Search = () => {
  const [data] = useCollage();
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
             label='Search Collage'
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
