export type FakeUsersDataTypes = {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  login: {
    username: string
  }
  dob: {
    date: Date
    age: number
  }
  picture: {
    medium: string
  }
}

export type FakeUsersTypes = {
  data?: { results: FakeUsersDataTypes[] }
}
