import styled from 'styled-components';

import { Spinner as BPSpinner } from "@blueprintjs/core";

export default function Spinner() {
  return <>
    <SpinnerContainer>
      <BPSpinner />
    </SpinnerContainer>
  </>;
}

const SpinnerContainer = styled.div`
  margin-top: 64px;
`;
