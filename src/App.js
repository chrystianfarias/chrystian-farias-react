import "./reset.css";
import styled from "styled-components";
import back from "./assets/back.jpg";
import Repositories from "./components/repositories";
import SocialMedias from "./components/socialMedias";

const Container = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-family: 'Roboto', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Background = styled.div`
  background-image: url(${back});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: .1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
const Name = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 70px;
  strong {
    font-weight: 700;
  }
`;

function App() {
  return (
    <Container>
      <Background/>
      <Name>Chrystian<strong>Farias</strong></Name>
      <SocialMedias/>
      <Repositories/>
    </Container>
  );
}

export default App;
