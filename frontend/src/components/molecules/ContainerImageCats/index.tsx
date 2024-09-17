import React from "react"

import selectCat from "../../../shared/images/select-cat.png"
import ContainerImageCatsType from "../../../shared/types/PagePropsTypes/ContainerImageCatsTypes"

function ContainerImageCats({ code }: ContainerImageCatsType) {
  const url = "https://http.cat/"

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        className="max-w-full max-h-full"
        src={code ? `${url}${code}` : selectCat}
        alt="cat code"
      />
    </div>
  )
}

export default ContainerImageCats
