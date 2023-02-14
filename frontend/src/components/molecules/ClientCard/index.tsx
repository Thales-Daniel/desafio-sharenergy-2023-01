import React from "react"
import { BsTrash } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import { ClientCardType } from "../../../shared/types/PagePropsTypes/ClientCardTypes"
import ClientCardField from "../../atoms/ClientCardField"

function ClientCard({
  client,
  deleteClient,
  showEditModal,
  setShowModalEdit,
  setLastId,
  showModal,
}: ClientCardType) {
  const { name, email, telephone, address, cpf, _id } = client

  const handleClickEdit = () => {
    setShowModalEdit(true)
    setLastId(_id)
  }
  return (
    <div className="h-fit w-full flex flex-col gap-1" key={_id}>
      <div className="flex gap-2 items-center justify-start w-full pl-2">
        {!showEditModal && (
          <button type="button" onClick={() => deleteClient(_id)}>
            <BsTrash className="text-xl" />
          </button>
        )}
        {!showModal && (
          <button type="button" onClick={() => handleClickEdit()}>
            <BiEdit className="text-xl" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full border-black-not-strong border p-4 rounded-xl 2lg:flex 2lg:flex-col 2lg:items-start">
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
