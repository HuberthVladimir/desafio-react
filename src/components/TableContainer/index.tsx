import './style.scss'
import { TableContainerProps } from '../../types'

export const TableContainer = ({children, title, height = 15.43, } : TableContainerProps) => {
   return (
      <section className="table-container" style={{ height: `${height}rem`}}>
         <header><span>{title}</span></header>
         {children}
      </section>
   )
}
