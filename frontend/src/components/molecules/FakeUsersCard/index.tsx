import React from "react"

import { FakeUsersCardTypes } from "../../../shared/types/PagePropsTypes/fakeUsersCardTypes"
import FakeUserDescription from "../FakeUserDescription"
import FakeUserImgContainer from "../FakeUserImgContainer"

function FakeUsersCard({ user }: FakeUsersCardTypes) {
  return (
    <div className="fake-user-card">
      <FakeUserImgContainer user={user} />
      <FakeUserDescription user={user} />
    </div>
  )
}

export default FakeUsersCard
