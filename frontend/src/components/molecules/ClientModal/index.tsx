/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import ClientModalType from "../../../shared/types/PagePropsTypes/ClientModalTypes"

function ClientModal({ addClient }: ClientModalType) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [address, setAddress] = useState("")
  const [cpf, setCpf] = useState("")

  return (
    <form className="h-72 bg-red-400 absolute top-1/4 w-4/5 z-50">
      <label htmlFor="name">
        Name:
        <input type="text" />
      </label>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}

export default ClientModal
