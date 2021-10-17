import React from 'react'
import DefaultLayout from '../../components/DefaultLayout';
import { SumResources } from '../../components/SumResources'
import { ServerTable } from '../../components/ServerTable'

function Home() {

  return (
    <DefaultLayout>
      <SumResources/>
      <ServerTable />
    </DefaultLayout>
  );
}

export default Home;