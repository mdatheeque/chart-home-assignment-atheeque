import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterContext } from "../../context/filterContext";

export default function SingleSelect(props: any) {
  const { initVal } = React.useContext(FilterContext);
  const [seletedCategory, setseletedCategory] = React.useState("");
  const { category, handleinpChange } = props;

  const resetSelectedVal = () => {
    setseletedCategory("");
  };

  React.useEffect(() => {
    if (initVal.shouldClearSelection) resetSelectedVal();
  }, [initVal]);

  const handleChange = (event: SelectChangeEvent) => {
    setseletedCategory(event.target.value);
    handleinpChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 230 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seletedCategory}
          label="Category"
          onChange={handleChange}
        >
          {category.map((eachCategory: any) => (
            <MenuItem key={eachCategory.slug} value={eachCategory.name}>
              {eachCategory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
