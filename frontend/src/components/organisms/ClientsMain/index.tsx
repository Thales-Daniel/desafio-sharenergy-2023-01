import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useContext, useState } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import useApi from "../../../hooks/useApi"
import { ClientType } from "../../../shared/types/PagePropsTypes/ClientCardTypes"
import ClientCard from "../../molecules/ClientCard"
import ClientModal from "../../molecules/ClientModal"

function ClientsMain() {
  const api = useApi()
  const { userInfor } = useContext(AuthContext)
  const [clients, setClients] = useState<any>([])
  const [showModal, setShowModal] = useState(false)

  const { isLoading } = useQuery({
    queryKey: ["client"],
    queryFn: () => api.findAll(userInfor.token),
    onSuccess: (data) => {
      setClients(data)
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  const queryClient = useQueryClient()

  const addClient = useMutation({
    mutationFn: (client: ClientType) =>
      api.createClient(client, userInfor.token),
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
        onClick={() => setShowModal(!showModal)}
      >
        New Client
      </button>
      {showModal && <ClientModal addClient={addClient.mutate} />}
      {clients.map((client: ClientType) => (
        <ClientCard client={client} />
      ))}
    </main>
  )
}

export default ClientsMain
