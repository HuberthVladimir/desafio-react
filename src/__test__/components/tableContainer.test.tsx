import { render, screen } from '@testing-library/react'
import { TableContainer } from '../../components/TableContainer'

describe('component table container', () => {
   it("Should render the entrance values", () => {
      render(
      <TableContainer title="Test title">
         <h1>Test children</h1>
      </TableContainer>)
   
      expect(screen.queryByText('Test children')).toBeInTheDocument()
      expect(screen.queryByText('Test title')).toBeInTheDocument()
   })

})
