import React from 'react'
import { TableContainer } from '../TableContainer'
import './style.scss'

interface SumResourcesProps {
   selectedServers?: string
   memory?: string
   cpuAmount?: string
   disksAmount?: string
   className?: string
}

export const SumResources = ({ selectedServers, memory, cpuAmount, disksAmount, className} : SumResourcesProps) => {
   return (
      <TableContainer title="Sumário de recursos dos servidores" className={className}>
         <main className="sum-resources">
            <div className="resources-table">
               <div className="titles">Servidores Selecionados</div>
               <div className="content">{ selectedServers ? `${selectedServers} servidores selecionados` : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de Memória</div>
               <div className="content">{ memory ? `${memory} GB` : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de CPUs</div>
               <div className="content">{ cpuAmount ? `${cpuAmount} vCPUs` : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de Discos</div>
               <div className="content">{ disksAmount ? `${disksAmount} GB` : 'Nenhum servidor selecionado'}</div>
            </div>
         </main>
      </TableContainer>
   )
}
