import React from 'react'
import { TableContainer } from '../TableContainer'
import './style.scss'

export const ServerTable = () => {
   return (
      <TableContainer title="Tabela de servidores" height={23.93}>
         <main className="inside-container">
            <table>
               <tr>
                  <th>Select</th>
                  <th>Hostname</th>
                  <th>Memória</th>
                  <th>vCPUs</th>
                  <th>Disco</th>
                  <th>IP</th>
               </tr>

               <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>Server 1</td>
                  <td>10Gb</td>
                  <td>4 vCPUs</td>
                  <td>200 GB</td>
                  <td>10.0.0.1</td>
               </tr>

               <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>Server 2</td>
                  <td>10Gb</td>
                  <td>4 vCPUs</td>
                  <td>200 GB</td>
                  <td>10.0.0.1</td>
               </tr>

               <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>Server 3</td>
                  <td>10Gb</td>
                  <td>4 vCPUs</td>
                  <td>200 GB</td>
                  <td>10.0.0.1</td>
               </tr>

               <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>Server 4</td>
                  <td>10Gb</td>
                  <td>4 vCPUs</td>
                  <td>200 GB</td>
                  <td>10.0.0.1</td>
               </tr>

               <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td>Server 5</td>
                  <td>10Gb</td>
                  <td>4 vCPUs</td>
                  <td>200 GB</td>
                  <td>10.0.0.1</td>
               </tr>
            </table>
         </main>
      </TableContainer>
   )
}
