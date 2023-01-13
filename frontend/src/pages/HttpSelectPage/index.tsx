import React, { useState } from "react"

import OptionSelectHttp from "../../components/atoms/OptionSelectHttp"
import arrayOfHttp from "../../shared/utils/arrayOfHttp"

function HttpSelectPage() {
  const url = "https://http.cat/"
  const [url2, setUrl2] = useState("")

  return (
    <div className="div-container flex items-center justify-center w-full">
      <main className="flex flex-col w-[60%] gap-10 items-center justify-center">
        <select
          className="w-40 text-center h-8 text-xl rounded-lg"
          onClick={(event) => {
            const target = event.target as HTMLSelectElement
            setUrl2(`${url}${target.value}`)
          }}
        >
          {arrayOfHttp.map((http) => (
            <OptionSelectHttp value={http} />
          ))}
        </select>
        {url2 ? (
          <img className="rounded-xl" src={url2} alt="cat code" />
        ) : (
          <img src={`${url}${100}`} alt="cat code" />
        )}
      </main>
    </div>
  )
}

export default HttpSelectPage
