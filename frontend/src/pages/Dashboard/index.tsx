import React from "react"
import { useQuery } from "@tanstack/react-query"

import { CircularProgress } from "@mui/material"
import getFakeUsers from "../../services/getFakeUsers"
import MainDashboard from "../../components/organisms/MainDashboard"

function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["fakeUsers"],
    queryFn: getFakeUsers,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <CircularProgress />
  return (
    <div className="pt-[100px] h-screen flex flex-col items-center justify-evenly">
      <MainDashboard data={data} />
    </div>
  )
}

export default Dashboard
