import React, {ReactNode} from 'react'
import './style.scss'

interface TableContainerProps {
   children: ReactNode
   title: string
   height?: number;
   className?: string
}

export const TableContainer = ({children, title, height = 15.43, className} : TableContainerProps) => {
   return (
      <section className={`table-container ${className}`} style={{ height: `${height}rem`}}>
         <header><span>{title}</span></header>

         {children}
      </section>
   )
}
