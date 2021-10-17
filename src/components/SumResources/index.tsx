import React from 'react'
import { useGlobalContext } from '../../hooks/context'
import { TableContainer } from '../TableContainer'
import './style.scss'

export const SumResources = () => {
   const { selectedServer } = useGlobalContext()

   return (
      <TableContainer title="Sumário de recursos dos servidores">
         <main className="sum-resources">
            <div className="resources-table">
               <div className="titles">Servidores Selecionados</div>
               <div className="content">
                  { selectedServer.length > 0 
                     ? 
                     `${selectedServer.length} servidores selecionados` 
                     : 
                     'Nenhum servidor selecionado'
                  }
                  </div>
               <div className="titles">Total de Memória</div>
               <div className="content">
                  { selectedServer.length > 0 
                     ? 
                     `${selectedServer.map((data) =>  data.configuracao.memoryProvisioned).reduce((acc, data) => acc + data) } GB` 
                     : 
                     'Nenhum servidor selecionado'
                  }
                  </div>
               <div className="titles">Total de CPUs</div>
               <div className="content">
                  { selectedServer.length > 0 
                     ?
                     `${selectedServer.map((data) =>  data.configuracao.cpuProvisioned).reduce((acc, data) => acc + data)} vCPUs` 
                     :
                     'Nenhum servidor selecionado'}
                  </div>
               <div className="titles">Total de Discos</div>
               <div className="content">
                  { selectedServer.length > 0 
                     ? 
                     `${selectedServer.map((data) =>  data.configuracao.totalDiskGB).reduce((acc, data) => acc + data) } GB` 
                     : 
                     'Nenhum servidor selecionado'
                  }
               </div>
            </div>
         </main>
      </TableContainer>
   )
}
