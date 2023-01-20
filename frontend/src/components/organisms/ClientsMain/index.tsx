import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useContext, useState } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import useApi from "../../../hooks/useApi"
import { ClientNoIdType, ClientType } from "../../../shared/types/clientType"
import ClientCard from "../../molecules/ClientCard"
import ClientModal from "../../molecules/ClientModal"
import ClientModalEdit from "../../molecules/ClientModalEdit"

function ClientsMain() {
  const [clients, setClients] = useState<ClientType[]>([])
  const [showModal, setShowModal] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [sucessMessage, setSucessMessage] = useState(false)
  const [errorEditMessage, setErrorEditMessage] = useState("")
  const [lastId, setLastId] = useState("")

  const api = useApi()
  const queryClient = useQueryClient()
  const { userInfor } = useContext(AuthContext)

  const { isLoading } = useQuery({
    queryKey: ["client"],
    queryFn: () => api.findAll(userInfor.token),
    onSuccess: (data) => {
      setClients(data)
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  const addClient = useMutation({
    mutationFn: (client: ClientNoIdType) =>
      api.createClient(client, userInfor.token),
    onSuccess: () => {
      setSucessMessage(true)
      setTimeout(() => {
        setSucessMessage(false)
      }, 3500)
      queryClient.invalidateQueries({ queryKey: ["client"] })
    },
    onError: (err: Error) => {
      setErrorMessage(err.toString())
      setTimeout(() => {
        setErrorMessage("")
      }, 3500)
    },
  })

  const updateClient = useMutation({
    mutationFn: ({ id, body }: { id: string; body: ClientNoIdType }) =>
      api.updateClient(id, body, userInfor.token),
    onSuccess: () => {
      setSucessMessage(true)
      setTimeout(() => {
        setSucessMessage(false)
      }, 3500)

      queryClient.invalidateQueries({ queryKey: ["client"] })
    },
    onError: (err: Error) => {
      setErrorEditMessage(err.toString())
      setTimeout(() => {
        setErrorEditMessage("")
      }, 3500)
    },
  })

  const deleteClient = useMutation({
    mutationFn: (id: string) => api.deleteClient(id, userInfor.token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client"] })
    },
  })

  if (isLoading) return <div>loading...</div>

  return (
    <main className="w-3/4 flex flex-col items-center gap-10">
      <button
        type="button"
        className="bg-light-blue rounded-lg p-2 text-semi-white"
        onClick={() => setShowModal(true)}
      >
        New Client
      </button>
      {showModal && (
        <ClientModal
          sucessMessage={sucessMessage}
          addClient={addClient.mutate}
          closeModal={setShowModal}
          errorMessage={errorMessage}
        />
      )}
      {showModalEdit && (
        <ClientModalEdit
          sucessMessage={sucessMessage}
          editClient={updateClient.mutate}
          closeModal={setShowModalEdit}
          errorMessage={errorEditMessage}
          id={lastId}
        />
      )}
      {clients.map((client: ClientType) => (
        <ClientCard
          client={client}
          deleteClient={deleteClient.mutate}
          key={client._id}
          showEditModal={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          setLastId={setLastId}
          showModal={showModal}
        />
      ))}
    </main>
  )
}

export default ClientsMain
