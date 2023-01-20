import { useQuery } from "@tanstack/react-query"
import React, { useContext, useState } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import useApi from "../../../hooks/useApi"
import { ClientType } from "../../../shared/types/PagePropsTypes/ClientCardTypes"
import ClientCard from "../../molecules/ClientCard"

function ClientsMain() {
  const api = useApi()
  const { userInfor } = useContext(AuthContext)
  const [clients, setClients] = useState<any>([])

  const { isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: () => api.findAll(userInfor.token),
    onSuccess: (data) => {
      setClients(data)
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>loading...</div>

  return (
    <div className="w-3/4 flex flex-col items-center gap-10">
      {clients.map((client: ClientType) => (
        <ClientCard client={client} />
      ))}
    </div>
  )
}

export default ClientsMain
