import React, {createContext, useContext, useState} from 'react'

interface IProviderProps {
   children?: React.ReactNode;
}

interface ConfigServerProps {
   cpuProvisioned: number
   memoryProvisioned: number
   totalDiskGB: number
}

interface ServerProps {
   hostname: string
   configuracao : ConfigServerProps
   ip: string
}

interface AppGlobalProps {
   selectedServer: ServerProps[] | []
   setSelectedServer: (arg: ServerProps[] | []) => void
}

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