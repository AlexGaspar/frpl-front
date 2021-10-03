
import styled from 'styled-components';

import {
  Card,
  Elevation
} from "@blueprintjs/core";

interface MapArray {
  [index: string]: string;
}

export default function MatchCard(
  { match }: any
) {
  console.log(match);

  const now = Math.floor(Date.now() / 1000);
  // const startedAt = new Date((now - match.started_at) * 1000).toISOString().substr(14, 5);
  const startedAt = '12:12';
  const score = getScore(match);
  const image = getMapImage(match);

  return (
    <Card style={{
      marginTop: 10,
      position: 'relative',
      backgroundImage: `url('/img/${image}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }} interactive={true} elevation={Elevation.TWO}>
      <Container>
        <Row>
          <ItemRow><h2>{match.teams.faction1.name}</h2></ItemRow>
          <ItemRow><h1>{score && score.faction1}</h1></ItemRow>
          <ItemRow><h3>VS</h3></ItemRow>
          <ItemRow><h1>{score && score.faction2}</h1></ItemRow>
          <ItemRow><h2>{match.teams.faction2.name}</h2></ItemRow>
        </Row>
        <p>En cours depuis: {startedAt}</p>
        <a href={getMatchURL(match)}>Voir sur Faceit</a>
      </Container>
    </Card >
  );
}

function getMapImage(match: any): string {
  const map = match?.voting?.map?.pick[0];
  if (map == null) {
    return 'voting.jpg';
  }

  return `${map}.jpg`;
}

function getScore(match: any) {
  if (match.results == null) {
    return null;
  }

  return match.results.score;
}

function getMatchURL(match: any) {
  return match.faceit_url.replace('{lang}', 'fr');
}


const Container = styled.div`
  margin-top: 10px;
  z-index: 1;
  opacity: 1;
`;

const LeftContainer = styled.div`
  text-align: left;
`;

const RightContainer = styled.div`
  margin-left: 32px;
`;

const MatchContainer = styled.div`
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ItemRow = styled.div`
  margin: 0 10px;
  display: inline-block;
`;