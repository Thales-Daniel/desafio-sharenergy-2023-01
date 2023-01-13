import React from "react"

import { DogoTypes } from "../../../shared/types/PagePropsTypes/mainPropsType"

function MainDogs({ data, mutate, isFetching }: DogoTypes) {
  return (
    <main className="w-screen h-[calc(100%-8.75rem)] flex flex-col items-center gap-5">
      <button
        className="self-center bg-light-blue border-none p-2 rounded text-semi-white"
        type="button"
        onClick={() => mutate()}
      >
        Generate Doggo
      </button>
      <div className="h-full flex items-center justify-center">
        {isFetching ? (
          <div>loading . . .</div>
        ) : (
          <img
            className="max-w-full max-h-full min-w-full min-h-full"
            src={data?.url}
            alt="dogo something"
          />
        )}
      </div>
    </main>
  )
}

export default MainDogs
