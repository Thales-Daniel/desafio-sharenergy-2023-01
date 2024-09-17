import React from "react"

import FakeUsersCardType from "../../../shared/types/PagePropsTypes/fakeUsersCardTypes"
import FakeUserDescription from "../FakeUserDescription"
import FakeUserImgContainer from "../FakeUserImgContainer"

function FakeUsersCard({ user }: FakeUsersCardType) {
  return (
    <div className="fake-user-card">
      <FakeUserImgContainer user={user} />
      <FakeUserDescription user={user} />
    </div>
  )
}

export default FakeUsersCard
