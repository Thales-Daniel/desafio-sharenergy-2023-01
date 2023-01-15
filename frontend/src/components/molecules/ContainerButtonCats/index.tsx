import React from "react"

import { ContainerButtonCatsTypes } from "../../../shared/types/PagePropsTypes/ContainerButtonCatsTypes"

function ContainerButtonCats({
  inputValue,
  setInputValue,
  setCode,
}: ContainerButtonCatsTypes) {
  return (
    <div className="flex gap-4">
      <input
        className="bg-semi-white border-border-gray border-2 rounded-md"
        type="number"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setCode(inputValue)
        }}
      >
        go
      </button>
    </div>
  )
}

export default ContainerButtonCats
