import React, { useEffect } from "react"
// import { useQuery } from "@tanstack/react-query"

// import getCats from "../../services/getCats"

function HttpSelectPage() {
  // const [code, setCode] = useState("200")

  // const { data } = useQuery({
  //   queryKey: ["cats"],
  //   queryFn: () => getCats(code),
  //   refetchInterval: false,
  //   refetchOnWindowFocus: false,
  // })

  // "https://http.cat/200.jpg"

  const fetchApiText = async () => {
    const objResp = await fetch("https://http.cat/200.", { mode: "no-cors" })
    if (!objResp.ok) return { error: true }
    const resp = await objResp.text()
    return JSON.parse(resp)
  }

  useEffect(() => {
    fetchApiText()
  }, [fetchApiText])

  return <div className="div-container">select your code</div>
}

export default HttpSelectPage
