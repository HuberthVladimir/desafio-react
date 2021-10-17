import React, {useEffect, useState} from 'react'
import { TableContainer } from '../TableContainer'
import api from '../../services/api'
import './style.scss'
import { useGlobalContext } from '../../hooks/context'

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

export const ServerTable = () => {
   const [ serverData, setServerData ] = useState<ServerProps[]>([])
   const { selectedServer, setSelectedServer } = useGlobalContext()

   useEffect(() => {
      console.log(selectedServer)
   }, [selectedServer])

   const handleChange = ( array: any) => {
      const copySelectedServer = [...selectedServer]
      const position = copySelectedServer.findIndex(data => data.hostname === array.hostname)
      
      if(position >= 0) {
         copySelectedServer.splice(position, 1)
         return setSelectedServer(copySelectedServer)
      }
      const teste = [...copySelectedServer, array]
      return setSelectedServer(teste)
   }

   useEffect(() => {
      (async () => {
         const { data } = await api.get('/servers')
         setServerData(data)
      })()
   }, [])

   return (
      <TableContainer title="Tabela de servidores" height={27.53}>
         <main className="inside-container">
            <table>
               <thead>
                  <tr>
                     <th>Select</th>
                     <th>Hostname</th>
                     <th>Memória</th>
                     <th>vCPUs</th>
                     <th>Disco</th>
                     <th>IP</th>
                  </tr>
               </thead>

               <tbody>
                  {serverData.map((data, index, array) => {
                        return (
                           <tr key={data.hostname} >
                              <td>
                                 <input 
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    onChange={() => handleChange(array[index])}
                                 />
                              </td>
                              <td>{data.hostname}</td>
                              <td>{data.configuracao.memoryProvisioned} Gb</td>
                              <td>{data.configuracao.cpuProvisioned} vCPUs</td>
                              <td>{data.configuracao.totalDiskGB} GB</td>
                              <td>{data.ip}</td>
                           </tr>         
                        )
                     })}
               </tbody>
            </table>
         </main>
      </TableContainer>
   )
}
