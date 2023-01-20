import React from "react"

import FakeUserRowType from "../../../shared/types/PagePropsTypes/FakeUserRow"

function FakeUserRow({ info, children }: FakeUserRowType) {
  return (
    <div className="flex gap-2 items-center ">
      <div>{children}</div>
      <p className="text-[18px] sm:text-[13px]">{info}</p>
    </div>
  )
}

export default FakeUserRow
