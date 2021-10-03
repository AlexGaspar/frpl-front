import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import {
  ControlGroup,
  HTMLSelect,
} from "@blueprintjs/core";

import { MatchType } from '../../features/members/api/faceit/faceit.type';
import { genFetchMatches } from '../../features/members/api/faceit/faceit.api';

import MatchCard from '../matches/MatchCard';
import Spinner from '../components/Spinner';
import PageHeader from '../components/PageHeader';

const FILTER_OPTIONS = [MatchType.ONGOING, MatchType.ALL, MatchType.UPCOMING, MatchType.PAST];

export default function HomePageWithoutRedux() {
  const [matchType, setMatchType] = useState<MatchType>(MatchType.ONGOING);

  return (
    <>
      <PageHeader
        title="Match en cours"
        buttonGroup={
          <ControlGroup>
            <HTMLSelect value={matchType} options={FILTER_OPTIONS} onChange={(e) => setMatchType(e.target.value as MatchType)} />
          </ControlGroup>
        } />
      <MatchesList matchType={matchType} />
    </>
  );
}

function MatchesList({ matchType }: { matchType: MatchType; }) {
  const [matches, setMatches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDataResponse = (matches: any) => {
    setMatches(matches);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);

    genFetchMatches(matchType)
      .then(handleDataResponse)
      .catch(e => console.log(e));
  }, [matchType]);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (matches == null) {
    return <h1>Empty list</h1>;
  }

  return (
    <MatchContainer>
      {matches.map((match, index) => <MatchCard key={index} match={match} />)}
    </MatchContainer>
  );
}

const MatchContainer = styled.div`
  margin-top: 32px;
`;