import React from 'react'
import DefaultLayout from '../../components/DefaultLayout';
import { SumResources } from '../../components/SumResources'
import { ServerTable } from '../../components/ServerTable'
//import { useGlobalContext } from '../../hooks/context'

function Home() {
  // const { selectedServer, setSelectedServer } = useGlobalContext()

  // React.useEffect(( ) => {
  //   console.log(selectedServer)
  // }, [selectedServer])

  return (
    <DefaultLayout>
      <SumResources/>
      <ServerTable />
    </DefaultLayout>
  );
}

export default Home;