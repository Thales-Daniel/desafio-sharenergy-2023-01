import React from "react"

import { FaUserAlt } from "react-icons/fa"
import { AiTwotoneMail } from "react-icons/ai"
import ageIcon from "../../../shared/images/age-icon.png"

import { FakeUsersCardTypes } from "../../../shared/types/PagePropsTypes/fakeUsersCardTypes"
import FakeUserRow from "../../atoms/FakeUserRow"

function FakeUserDescription({ user }: FakeUsersCardTypes) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start gap-4">
      <p className="text-3xl text-center">{`${user?.name.first} ${user?.name.last}`}</p>
      <div className="flex flex-col gap-2">
        <FakeUserRow info={user?.login.username}>
          <FaUserAlt className="text-2xl" />
        </FakeUserRow>
        <FakeUserRow info={user?.dob.age}>
          <img className="w-6" src={ageIcon} alt="age icon" />
        </FakeUserRow>
        <FakeUserRow info={user?.email}>
          <AiTwotoneMail className="text-2xl" />
        </FakeUserRow>
      </div>
    </div>
  )
}

export default FakeUserDescription
