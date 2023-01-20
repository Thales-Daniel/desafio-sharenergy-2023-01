import React from "react"

import ClientFieldType from "../../../shared/types/PagePropsTypes/ClientCardFieldTypes"

function ClientCardField({ title, value }: ClientFieldType) {
  return (
    <div className="flex items-start justify-center gap-3">
      <strong>{title}:</strong>
      <p>{value}</p>
    </div>
  )
}

export default ClientCardField
