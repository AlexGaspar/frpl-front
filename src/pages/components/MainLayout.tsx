
import { Outlet } from 'react-router-dom';
import { Colors, Classes } from '@blueprintjs/core';

import styled from 'styled-components';

const theme = {
  colors: Colors,
};

const Layout = styled.div`
  color: ${p => p.theme.colors.WHITE};
  padding: 12px 24px;
  height: calc(100vh - 50px);
`;

export default function MainLayout() {
  return (
    <div className={`App ${Classes.DARK}`}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}