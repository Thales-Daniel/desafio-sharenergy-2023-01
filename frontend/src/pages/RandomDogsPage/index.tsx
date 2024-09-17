import React, { useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import getDogs from "../../services/getDogs"
import MainDogs from "../../components/organisms/MainDogs"

function RandomDogsPage() {
  const { data, isFetching } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: getDogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dogs"] })
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ["dogs"] })
    },
  })

  useEffect(() => {
    if (data?.url.endsWith("mp4") || data?.url.endsWith("webm")) mutate()
  }, [data])

  return (
    <div className="div-container">
      <MainDogs data={data} isFetching={isFetching} mutate={mutate} />
    </div>
  )
}

export default RandomDogsPage
