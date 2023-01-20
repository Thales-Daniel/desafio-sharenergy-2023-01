import React from "react"

import ContainerButtonCatsType from "../../../shared/types/PagePropsTypes/ContainerButtonCatsTypes"

function ContainerButtonCats({
  inputValue,
  setInputValue,
  setCode,
}: ContainerButtonCatsType) {
  return (
    <div className="flex gap-4">
      <input
        className="bg-semi-white border-border-gray border-2 rounded-md p-[5px] outline-0"
        type="number"
        value={inputValue}
        placeholder="404"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        className="bg-light-blue text-semi-white px-3 rounded-md"
        type="button"
        onClick={() => {
          setCode(inputValue)
        }}
      >
        Go
      </button>
    </div>
  )
}

export default ContainerButtonCats
