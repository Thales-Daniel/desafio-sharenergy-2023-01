import React from "react"

import { FakeUsersCardTypes } from "../../../shared/types/PagePropsTypes/fakeUsersCardTypes"

function FakeUserImgContainer({ user }: FakeUsersCardTypes) {
  return (
    <div className="w-1/3 pr-5 h-full border-r-[0.5px] flex items-center border-border-gray">
      <div className="rounded-image ">
        <img
          className="rounded-full w-full h-full"
          src={user?.picture.medium}
          alt="user"
        />
      </div>
    </div>
  )
}

export default FakeUserImgContainer
