import React, { useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import getDogs from "../../services/getDogs"
import MainDogs from "../../components/organisms/MainDogs"

function RandomDogsPage() {
  const { data } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  const queryClient = useQueryClient()

  const { mutate, isError } = useMutation({
    mutationFn: getDogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dogs"] })
    },
  })

  useEffect(() => {
    if (data?.url.endsWith("mp4") || data?.url.endsWith("webm")) mutate()
    if (isError) mutate()
  }, [data, isError])

  return (
    <div className="div-container">
      <MainDogs data={data} mutate={mutate} />
    </div>
  )
}

export default RandomDogsPage
