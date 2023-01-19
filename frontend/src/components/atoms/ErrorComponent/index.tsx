import React from "react"

function ErroComponent({ message }: { message: string }) {
  return <div className="text-red-500">{message}</div>
}

export default ErroComponent
