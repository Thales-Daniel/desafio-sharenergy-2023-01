import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  ContextType,
  ProviderProps,
  TransactionsType,
  UserType,
} from "../shared/types/contextTypes"

export const UserContext = createContext<ContextType>({} as ContextType)

export function UserProvider({ children }: ProviderProps) {
  const context = useMemo()
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
