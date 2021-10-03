import { Alignment, Button, Navbar as NavBarComponent } from '@blueprintjs/core';

import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateMatches = () => {
    navigate('/matches');
  };

  return <NavBarComponent>
    <NavBarComponent.Group align={Alignment.LEFT}>
      <NavBarComponent.Heading>Blueprint</NavBarComponent.Heading>
      <NavBarComponent.Divider />
      <Button onClick={navigateHome} className="bp3-minimal" icon="home" text="Home" />
      <Button onClick={navigateMatches} className="bp3-minimal" icon="rocket-slant" text="Matches" />
    </NavBarComponent.Group>
  </NavBarComponent>;
}

export default NavBar;