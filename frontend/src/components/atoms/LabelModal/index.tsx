/* eslint-disable react/prop-types */
import React from "react"

function LabelModel({ title, value, onChange }: any) {
  return (
    <label htmlFor={title}>
      {title}
      <input type="text" id={title} value={value} onChange={onChange} />
    </label>
  )
}

export default LabelModel
