import React, {ReactNode} from 'react'
import './style.scss'

interface TableContainerProps {
   children: ReactNode
   title: string
   height?: number
}

export const TableContainer = ({children, title, height = 15.43, } : TableContainerProps) => {
   return (
      <section className="table-container" style={{ height: `${height}rem`}}>
         <header><span>{title}</span></header>

         {children}
      </section>
   )
}
