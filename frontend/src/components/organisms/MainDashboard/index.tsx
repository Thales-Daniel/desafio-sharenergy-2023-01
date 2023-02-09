import React, { useState } from "react"
import { Pagination } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"

import paginate from "../../../shared/utils/paginationFunc"
import { FakeUsersTypes } from "../../../shared/types/usersFakeTypes"
import FakeUsersCard from "../../molecules/FakeUsersCard"

function MainDashboard({ data }: FakeUsersTypes) {
  const [search, setSearch] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [actualPage, setActualPage] = useState(1)

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLFormElement
    target.preventDefault()
    setSearch(inputValue)
  }

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setActualPage(value)
  }

  const width = window.innerWidth > 1200 ? 4 : 2

  const pageFiltered = data?.results.filter((user) => {
    const fullName = `${user.name.last} ${user.name.last}`.toLowerCase()
    const email = user.email.toLowerCase().includes(search.toLocaleLowerCase())
    const username = user.login.username
      .toLowerCase()
      .includes(search.toLocaleLowerCase())
    const name = fullName.includes(search.toLocaleLowerCase())

    if (email || username || name) return user
  })

  const pages = paginate(width, actualPage, pageFiltered)

  let totalPages = 20

  console.log(pages)

  if (pageFiltered) {
    totalPages =
      pageFiltered?.length <= 4 ? 1 : Math.ceil(pageFiltered.length / 4)
  }
  return (
    <main className="h-full flex flex-col items-center justify-around sm:w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" className="flex ">
          <input
            id="search"
            name="search"
            value={inputValue}
            placeholder="Username, Name or Email"
            type="text"
            className="w-60 py-2 px-2 rounded-l border-black-not-strong border-[1px] border-r-0 outline-none"
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-semi-white rounded-r-md border-[1px] px-2 border-black-not-strong"
          >
            <AiOutlineSearch className="text-[30px]" />
          </button>
        </label>
      </form>
      <div className="h-2/3 grid gap-y-5 gap-x-14 grid-cols-2  sm:w-full xl:flex xl:flex-col sm:justify-around ">
        {pages?.map((user: any) => (
          <FakeUsersCard user={user} key={user?.login.username} />
        ))}
      </div>
      <Pagination
        page={actualPage}
        onChange={handleChange}
        count={totalPages}
        size="medium"
      />
    </main>
  )
}

export default MainDashboard
