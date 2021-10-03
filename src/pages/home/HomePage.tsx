import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Elevation,
  Spinner,
  Tag,
  Tooltip,
} from "@blueprintjs/core";

import { useAppSelector } from '../../app/hooks';

import { selectMembers } from '../../features/members/member.slice';
import MemberReducer from '../../features/members/member.slice';

import PageHeader from '../components/PageHeader';

function HomePage() {
  const members = useAppSelector(selectMembers);

  const [nextChecked, setNextChecked] = useState<boolean>(true);
  const [checkedArray, setCheckedArray] = useState<boolean[]>(new Array(members.length).fill(true));

  const selectedCount = checkedArray.filter(value => value).length;

  const handleCheckboxChange = (index: number) => {
    const copy = [...checkedArray];
    copy[index] = !copy[index];
    setCheckedArray(copy);
  };

  const handleSelectAllChange = () => {
    setCheckedArray(new Array(members.length).fill(nextChecked));
    setNextChecked(!nextChecked);
  };

  return <RootContainer>
    <PageHeader
      title="Home"
      subtitle="Description"
      buttonGroup={
        <ButtonGroup>
          <SelectAllButton onClick={handleSelectAllChange} nextValue={nextChecked} />
          <Button disabled={selectedCount === 0}>Remove ({selectedCount})</Button>
          <FetchButton />
        </ButtonGroup>
      } />
    {
      members.map((member: any, index: number) =>
        <MemberCard
          key={index}
          checked={checkedArray[index]}
          member={member}
          onChange={() => handleCheckboxChange(index)}
        />
      )
    }
  </RootContainer>;
}

function SelectAllButton({
  onClick,
  nextValue
}: { onClick: () => void, nextValue: boolean; }) {
  const label = nextValue ? 'Select All' : 'Deselect All';
  return <Button onClick={onClick}>{label}</Button>;
}

function FetchButton() {
  return <Tooltip content="Scan all hub's members and return those not meeting the criterias">
    <Button>Fetch
      <SpinnerContainer>
        <Spinner size={12} />
      </SpinnerContainer>
    </Button>
  </Tooltip>;
}

interface MemberCardProps {
  member: any;
  checked: boolean;
  onChange: () => void;
}

function MemberCard({
  member,
  checked,
  onChange,
}: MemberCardProps) {
  const formatCSGOHours = (hours: number | null): string => {
    if (hours == null) {
      return 'Private Steam Profile';
    }
    return `${hours} Hours`;
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    return <>
      {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
    </>;
  };

  return <Card
    interactive={true}
    onClick={onChange}
    elevation={Elevation.TWO}
    style={{ marginTop: 10 }}
  >
    <Container>
      <LeftContainer>
        <h5><a href="#">{member.nickname}</a></h5>
        <p><b>Matches</b>: {member.matchCount}</p>
        <p><b>Faceit Elo</b>: <Tag intent="warning">{member.elo}</Tag></p>
        <p><b>Last Time Played</b>: {formatDate(member.lastTimePlayed)}</p>
        <p><b>CSGO hours</b>: {formatCSGOHours(member.csgoHour)}</p>
      </LeftContainer>
      <RightContainer>
        <Checkbox onChange={onChange} checked={checked} />
      </RightContainer>
    </Container>
  </Card>;
}

const RootContainer = styled.div`
`;


const SpinnerContainer = styled.span`
  display: inline-flex;
  margin-left: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  text-align: left;
`;

const RightContainer = styled.div`
`;


export default HomePage;