import React from "react"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

import RememberButtonTypes from "../../../shared/types/PagePropsTypes/RememberButtonTypes"

export default function RememberButton({
  setChecked,
  checked,
}: RememberButtonTypes) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Remember-me"
    />
  )
}
