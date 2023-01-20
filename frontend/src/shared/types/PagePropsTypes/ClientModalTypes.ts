import { ClientNoIdType } from "../clientType"

type ClientModalType = {
  addClient: (_client: ClientNoIdType) => void
  closeModal: (_showModal: boolean) => void
  errorMessage: string
  sucessMessage: boolean
}

export default ClientModalType
