import styled from "styled-components";
import HeaderContainer from "./header/HeaderContainer";
import SliderContainer from "./slider/SliderContainer";
import TitleContainer from "./title/TitleContainer";

export default function Main() {
  return (
    <Box>
      <HeaderContainer></HeaderContainer>
      <TitleContainer></TitleContainer>
      <SliderContainer></SliderContainer>
    </Box>
  );
}

const Box = styled.div``;
