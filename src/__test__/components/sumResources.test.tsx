import { render, screen } from '@testing-library/react'
import { SumResources } from '../../components/SumResources'

describe('Component resources table', () => {
   it("Should render the entrance values", () => {
      render(
         <SumResources
            selectedServers="4"
            memory="354"
            cpuAmount="75"
            disksAmount="3096"
         />)

      expect(screen.queryByText('4 servidores selecionados')).toBeInTheDocument()
      expect(screen.queryByText('354 GB')).toBeInTheDocument()
      expect(screen.queryByText('75 vCPUs')).toBeInTheDocument()
      expect(screen.queryByText('3096 GB')).toBeInTheDocument()
   })
})