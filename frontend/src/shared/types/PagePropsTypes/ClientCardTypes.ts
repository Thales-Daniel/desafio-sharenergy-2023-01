import { ClientType } from "../clientType"

export type ClientCardType = {
  deleteClient: (_id: string) => void
  client: ClientType
  showEditModal: boolean
  setShowModalEdit: (_showModalEdit: boolean) => void
  setLastId: (_id: string) => void
  showModal: boolean
}
