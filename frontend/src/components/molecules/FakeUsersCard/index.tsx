import React from "react"

import { FakeUsersCardTypes } from "../../../shared/types/PagePropsTypes/fakeUsersCardTypes"
import FakeUserDescription from "../FakeUserDescription"
import FakeUserImgContainer from "../FakeUserImgContainer"

function FakeUsersCard({ user }: FakeUsersCardTypes) {
  return (
    <div className="h-1/4 w-1/4 bg-semi-white flex p-3 items-center rounded-2xl">
      <FakeUserImgContainer user={user} />
      <FakeUserDescription user={user} />
    </div>
  )
}

export default FakeUsersCard
