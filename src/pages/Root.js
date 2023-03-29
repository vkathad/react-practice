import { Outlet } from 'react-router-dom';
import NavBarUi from '../componets/UI/NavBarUi';

import Layout from './Layout';

function RootLayout() {
  return (
    <>
      
        <Layout >
           <Outlet />
        </Layout>
    </>
  );
}

export default RootLayout;
