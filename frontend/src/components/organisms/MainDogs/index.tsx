import React from "react"

import DogoType from "../../../shared/types/PagePropsTypes/mainPropsType"
import LoadingDog from "../../atoms/LoadingDog"

function MainDogs({ data, mutate, isFetching }: DogoType) {
  return (
    <main className="container-with-image">
      <button
        className="self-center bg-light-blue border-none p-2 rounded text-semi-white"
        type="button"
        onClick={() => mutate()}
      >
        Generate Doggo
      </button>
      <div className="h-full flex items-center justify-center">
        {isFetching ? (
          <LoadingDog />
        ) : (
          <img
            className="max-w-full max-h-full"
            src={data?.url}
            alt="dogo something"
          />
        )}
      </div>
    </main>
  )
}

export default MainDogs
