import { FakeUsersDataTypes } from "../types/usersFakeTypes"

function paginate(
  pageSize: number,
  pageNumber: number,
  array?: FakeUsersDataTypes[]
) {
  if (array)
    return array?.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}

export default paginate
