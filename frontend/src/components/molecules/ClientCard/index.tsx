import React from "react"
import { BsTrash } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import { ClientCardType } from "../../../shared/types/PagePropsTypes/ClientCardTypes"
import ClientCardField from "../../atoms/ClientCardField"

function ClientCard({ client }: ClientCardType) {
  const { name, email, telephone, address } = client
  return (
    <div className="h-[120px] grid grid-cols-[1.3fr_1.3fr_0.4fr] gap-3 w-3/4 border-black-not-strong border p-4 rounded-xl">
      <div className="client-infor-container">
        <ClientCardField title="Name" value={name} />
        <ClientCardField title="Email" value={email} />
      </div>
      <div className="client-infor-container">
        <ClientCardField title="Telephone" value={telephone} />
        <ClientCardField title="Address" value={address} />
      </div>

      <div className="flex gap-2 items-center justify-center">
        <BsTrash className="text-xl" />
        <BiEdit className="text-xl" />
      </div>
    </div>
  )
}

export default ClientCard
