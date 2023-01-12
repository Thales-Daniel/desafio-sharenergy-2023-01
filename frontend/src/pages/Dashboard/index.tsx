import React from "react"
import { useQuery } from "@tanstack/react-query"
import getFakeUsers from "../../services/getFakeUsers"
import Pagination from "../../components/molecules/Pagination"
import FakeUsersCard from "../../components/molecules/FakeUsersCard"

function Dashboard() {
  const { data } = useQuery({
    queryKey: ["fakeUsers"],
    queryFn: getFakeUsers,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  return (
    <div className="div-container">
      foto do usuário, nome completo, email, username e idade.
      <FakeUsersCard user={data?.results[0]} />
      <Pagination users={data} />
    </div>
  )
}

export default Dashboard
