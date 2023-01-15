import React, { useState } from "react"

import ContainerButtonCats from "../../molecules/ContainerButtonCats"
import ContainerImageCats from "../../molecules/ContainerImageCats"

function MainCats() {
  const [code, setCode] = useState("")
  const [inputValue, setInputValue] = useState("")
  return (
    <main className="container-with-image">
      <ContainerButtonCats
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCode={setCode}
      />
      <ContainerImageCats code={code} />
    </main>
  )
}

export default MainCats
