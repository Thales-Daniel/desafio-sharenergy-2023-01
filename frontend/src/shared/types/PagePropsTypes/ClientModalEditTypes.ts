import { ClientNoIdType } from "../clientType"

export type editClientType = {
  id: string
  body: ClientNoIdType
}

type ClientModalEditType = {
  editClient: (_body: editClientType) => void
  closeModal: (_showModal: boolean) => void
  errorMessage: string
  id: string
  sucessMessage: boolean
}

export default ClientModalEditType
