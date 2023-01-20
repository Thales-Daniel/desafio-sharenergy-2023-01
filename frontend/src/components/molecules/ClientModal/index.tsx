import React, { useState } from "react"
import { GrClose } from "react-icons/gr"
import ClientModalType from "../../../shared/types/PagePropsTypes/ClientModalTypes"
import ErrorComponent from "../../atoms/ErrorComponent"
import LabelModel from "../../atoms/LabelModal"
import SucessComponent from "../../atoms/SucessComponent"

function ClientModal({
  addClient,
  closeModal,
  errorMessage,
  sucessMessage,
}: ClientModalType) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [address, setAddress] = useState("")
  const [cpf, setCpf] = useState("")

  const body = { name, email, telephone, address, cpf }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    addClient(body)
  }

  return (
    <form
      className="form-modal absolute top-1/5 lg2:w-full"
      onSubmit={handleSubmit}
    >
      <button
        className="self-end "
        type="button"
        onClick={() => closeModal(false)}
      >
        <GrClose />
      </button>
      <div className=" w-full flex flex-col items-center justify-center gap-6 mb-10">
        <LabelModel title="Name" value={name} onChange={setName} length={30} />
        <LabelModel
          title="Email"
          value={email}
          onChange={setEmail}
          length={30}
        />
        <LabelModel
          title="Telephone"
          value={telephone}
          onChange={setTelephone}
          length={11}
        />
        <LabelModel
          title="Address"
          value={address}
          onChange={setAddress}
          length={30}
        />
        <LabelModel title="Cpf" value={cpf} onChange={setCpf} length={11} />
      </div>
      {sucessMessage && <SucessComponent message="Edit done successfully" />}
      {errorMessage && <ErrorComponent message={errorMessage} />}
      <button
        className="border text-lg rounded-lg px-4 py-2 border-black-not-strong"
        type="submit"
      >
        Create
      </button>
    </form>
  )
}

export default ClientModal
