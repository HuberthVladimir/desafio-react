import React from 'react'
import './style.scss'

interface SumResourcesProps {
   selectedServers?: string
   memory?: string
   cpuAmount?: string
   disksAmount?: string
}

export const SumResources = ({ selectedServers, memory, cpuAmount, disksAmount} : SumResourcesProps) => {
   return (
      <section className="sum-resources">
         <header><span className="resources-title">Sumário de recursos dos servidores</span></header>
         <main>
            <div className="resources-table">
               <div className="titles">Servidores Selecionados</div>
               <div className="content">{ selectedServers ? selectedServers : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de Memória</div>
               <div className="content">{ memory ? memory : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de CPUs</div>
               <div className="content">{ cpuAmount ? cpuAmount : 'Nenhum servidor selecionado'}</div>
               <div className="titles">Total de Discos</div>
               <div className="content">{ disksAmount ? disksAmount : 'Nenhum servidor selecionado'}</div>
            </div>
         </main>
      </section>
   )
}
