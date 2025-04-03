import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { FilterContext } from "../../context/filterContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultiSelect(props: any) {
  const { products, isCategorySelected, handleProductInPChange } = props;
  const { initVal } = React.useContext(FilterContext);
  const theme = useTheme();
  const [product, setProduct] = React.useState<string[]>([]);

  const resetSelectedVal = () => {
    setProduct([]);
  };

  React.useEffect(() => {
    if (initVal.shouldClearSelection) resetSelectedVal();
  }, [initVal]);

  React.useEffect(() => {
    setProduct([]);
  }, [products]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setProduct(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    handleProductInPChange(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 230 }}>
        <InputLabel id="demo-multiple-chip-label">Products</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          disabled={isCategorySelected ? false : true}
          value={product}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Products" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => (
                <Chip key={value.id} label={value.title} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {products.map((eachproduct: any) => (
            <MenuItem
              key={eachproduct.id}
              value={eachproduct}
              style={getStyles(eachproduct.title, product, theme)}
            >
              {eachproduct.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
