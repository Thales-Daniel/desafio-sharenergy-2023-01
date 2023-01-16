import React, { useState } from "react"
import { Pagination } from "@mui/material"
import { AiOutlineSearch } from "react-icons/ai"

import paginate from "../../../shared/utils/paginationFunc"
import { FakeUsersTypes } from "../../../shared/types/usersFakeTypes"
import FakeUsersCard from "../../molecules/FakeUsersCard"

function MainDashboard({ data }: FakeUsersTypes) {
  const [search, setSearch] = useState("")
  const [actualPage, setActualPage] = useState(1)
  const handleChange = (_event: any, value: number) => {
    setActualPage(value)
  }

  const width = window.innerWidth > 1200 ? 4 : 2

  const pageFiltered = data?.results.filter((user) => {
    const fullName = `${user.name.last} ${user.name.last}`
    const email = user.email.toLowerCase().includes(search.toLocaleLowerCase())
    const username = user.login.username
      .toLowerCase()
      .includes(search.toLocaleLowerCase())
    const name = fullName.toLowerCase().includes(search.toLocaleLowerCase())

    if (email || username || name) return user
  })

  const pages = paginate(width, actualPage, pageFiltered)

  let totalPages = 20

  if (pageFiltered) {
    totalPages =
      pageFiltered?.length <= 4 ? 1 : Math.ceil(pageFiltered.length / 4)
  }
  return (
    <main className="h-full flex flex-col items-center justify-around sm:w-full">
      <div className="relative">
        <p className="absolute right-1 top-[4px] h-full">
          <AiOutlineSearch className="text-[30px]" />
        </p>
        <input
          value={search}
          placeholder="Username, Name or Email"
          type="text"
          className="w-60 py-2 px-2 rounded-md border-black-not-strong border-[1px] outline-none"
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
      <div className="h-2/3 grid gap-y-5 gap-x-14 grid-cols-2 sm:w-full xl:flex xl:flex-col sm:justify-around">
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
