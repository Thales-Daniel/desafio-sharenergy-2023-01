/* eslint-disable react/prop-types */
import React from "react"
import LabelModelTypes from "../../../shared/types/PagePropsTypes/LabelModelTypes"

function LabelModel({ title, value, onChange, length }: LabelModelTypes) {
  return (
    <label className="flex flex-col gap-1" htmlFor={title}>
      <p className="text-lg">{title}</p>
      <input
        maxLength={length}
        className="rounded-md p-1 outline-none "
        type="text"
        id={title}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default LabelModel
