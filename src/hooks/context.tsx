import React, {createContext, useContext, useState} from 'react'
import { ServerProps, IProviderProps, AppGlobalProps } from '../types'

const useAppGlobalContext = createContext({} as AppGlobalProps)

export const AppProvider = ({children} : IProviderProps) => {
   const [selectedServer, setSelectedServer] = useState<ServerProps[] | []>([])

   return (
      <useAppGlobalContext.Provider
         value={{
            selectedServer, setSelectedServer,
         }}>
            {children}
         </useAppGlobalContext.Provider>
   )
}

export function useGlobalContext(): AppGlobalProps {
  return useContext(useAppGlobalContext)
}