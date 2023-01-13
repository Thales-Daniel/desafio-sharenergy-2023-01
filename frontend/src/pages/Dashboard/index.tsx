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
    <div className="pt-[100px] min-h-screen flex justify-center">
      <main className="grid gap-y-5 gap-x-14 grid-cols-2 justify-center xl:flex xl:flex-col">
        {data?.results.map((user) => (
          <FakeUsersCard user={user} />
        ))}
        <Pagination />
      </main>
    </div>
  )
}

export default Dashboard
