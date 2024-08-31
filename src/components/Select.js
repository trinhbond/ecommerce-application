import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 175,
    },
  },
};

export default function FormSelect({ options, value, onChange }) {
  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 175,
          margin: 0,
          [`& .MuiInputBase-input`]: { padding: "4px 8px" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderWidth: 1,
              borderColor: "inherit",
            },
          },
        }}
      >
        <Select
          value={value}
          onChange={onChange}
          MenuProps={MenuProps}
          sx={{
            borderRadius: 0,
            fontSize: 14,
            width: 175,
          }}
        >
          {options.map(({ value, name }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
