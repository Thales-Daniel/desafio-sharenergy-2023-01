import React from "react"

import ClientFieldTypes from "../../../shared/types/PagePropsTypes/ClientCardFieldTypes"

function ClientCardField({ title, value }: ClientFieldTypes) {
  return (
    <div className="flex items-start justify-center gap-3">
      <strong>{title}:</strong>
      <p>{value}</p>
    </div>
  )
}

export default ClientCardField
