type DogoType = {
  data?: { url: string; fileSizeBytes: number }
  mutate: () => void
  isFetching?: boolean
}

export default DogoType
