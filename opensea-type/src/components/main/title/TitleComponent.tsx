import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function TitleComponent() {
  return (
    <TitleWidth>
      <TitleName>Explore,collect,and sell NFTs</TitleName>
    </TitleWidth>
  );
}

const TitleWidth = styled.div`
  width: 100%;
`;

const TitleName = styled.h1`
  font-size: 50px;
  margin-top: 40px;
  text-align: center;
`;
