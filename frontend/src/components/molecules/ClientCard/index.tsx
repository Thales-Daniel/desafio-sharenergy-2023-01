import React from "react"
import { BsTrash } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import { ClientCardType } from "../../../shared/types/PagePropsTypes/ClientCardTypes"
import ClientCardField from "../../atoms/ClientCardField"

function ClientCard({ client }: ClientCardType) {
  const { name, email, telephone, address, cpf } = client
  return (
    <div className="h-[120px] w-3/4 flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-start w-full pl-2">
        <BsTrash className="text-xl" />
        <BiEdit className="text-xl" />
      </div>
      <div className="grid grid-cols-3 gap-3 w-full border-black-not-strong border p-4 rounded-xl">
        <div className="client-infor-container">
          <ClientCardField title="Name" value={name} />
          <ClientCardField title="Email" value={email} />
        </div>
        <div className="client-infor-container">
          <ClientCardField title="Telephone" value={telephone} />
          <ClientCardField title="Address" value={address} />
        </div>
        <div className="client-infor-container justify-start">
          <ClientCardField title="Cpf" value={cpf} />
        </div>
      </div>
    </div>
  )
}

export default ClientCard
