import styled from 'styled-components';

import {
  ButtonGroup,
  ControlGroup,
} from "@blueprintjs/core";

export default function PageHeader({
  title,
  subtitle,
  buttonGroup,
}: {
  title: string,
  subtitle?: string,
  buttonGroup: React.ReactElement<ButtonGroup | ControlGroup>,
}) {
  return <HeaderContainer>
    <LeftContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </LeftContainer>
    <RightContainer>
      {buttonGroup}
    </RightContainer>
  </HeaderContainer>;
}

const Title = styled.h2`
  margin-bottom: 4px;
`;

const Subtitle = styled.h4`
`;


const HeaderContainer = styled.div`
  display: flex;
  margin-right: 8px;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  text-align: left;
`;

const RightContainer = styled.div`
`;