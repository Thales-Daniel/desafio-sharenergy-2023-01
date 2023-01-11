import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import getDogs from "../../services/getDogs"

function RandomDogsPage() {
  const [refresh, setRefres] = useState(false)
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getDogs,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <img src={data.url} alt="dogo something" />
      <button type="button" onClick={() => setRefres(!refresh)}>
        refresh
      </button>
    </div>
  )
}

export default RandomDogsPage
