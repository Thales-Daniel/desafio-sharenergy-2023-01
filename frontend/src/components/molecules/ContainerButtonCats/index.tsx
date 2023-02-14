import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

import ContainerButtonCatsType from "../../../shared/types/PagePropsTypes/ContainerButtonCatsTypes"

function ContainerButtonCats({
  inputValue,
  setInputValue,
  setCode,
}: ContainerButtonCatsType) {
  return (
    <div className="flex">
      <input
        className="bg-semi-white border-border-gray border-r-0 border-2 rounded-l-md p-[5px] outline-0"
        type="number"
        value={inputValue}
        placeholder="404"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        className="bg-light-blue text-semi-white px-3 rounded-r-md"
        type="button"
        onClick={() => {
          setCode(inputValue)
        }}
      >
        <AiOutlineSearch className="text-[30px]" />
      </button>
    </div>
  )
}

export default ContainerButtonCats
