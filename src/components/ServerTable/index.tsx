import React, {useEffect, useState} from 'react'
import { TableContainer } from '../TableContainer'
import api from '../../services/api'
import './style.scss'
import { useGlobalContext } from '../../hooks/context'
import { ServerProps } from '../../types'
import { verifyArraySelectedServers } from '../../functions/serverTable'

export const ServerTable = () => {
   const [ serverData, setServerData ] = useState<ServerProps[]>([])
   const { selectedServer, setSelectedServer } = useGlobalContext()

   const handleCheckboxClick = (array : ServerProps) => {
      const newValueArray = verifyArraySelectedServers(selectedServer, array)
      return setSelectedServer(newValueArray)
   }

   useEffect(() => {
      (async () => {
         const { data } = await api.get('/servers')
         setServerData(data)
      })()
   }, [])

   return (
      <TableContainer title="Tabela de servidores" height={27}>
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
                                    onChange={() => handleCheckboxClick(array[index])}
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
