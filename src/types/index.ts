import {ReactNode} from 'react'

export interface ConfigServerProps {
   cpuProvisioned: number
   memoryProvisioned: number
   totalDiskGB: number
}

export interface ServerProps {
   hostname: string
   configuracao : ConfigServerProps
   ip: string
}

export interface TableContainerProps {
   children: ReactNode
   title: string
   height?: number
}

export interface IProviderProps {
   children?: React.ReactNode;
}

export interface AppGlobalProps {
   selectedServer: ServerProps[] | []
   setSelectedServer: (arg: ServerProps[] | []) => void
}