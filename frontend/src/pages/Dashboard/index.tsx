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
    <div className="div-container flex flex-col gap-4 min-h-screen">
      {data?.results.map((user) => (
        <FakeUsersCard user={user} />
      ))}
      <Pagination users={data} />
    </div>
  )
}

export default Dashboard
