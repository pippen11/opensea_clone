import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <MainBar>
      <MainBarLogo>
        <LogoImg src="https://opensea.io/static/images/logos/opensea.svg"></LogoImg>
        <LogoTitle>OpenSea</LogoTitle>
      </MainBarLogo>
      <SearchBarBox>
        <SearchBar placeholder="Search item,collections,and accounts" />
      </SearchBarBox>
      <DropDownBox>
        <ul>
          <li>Explore</li>
          <li>Drops</li>
          <li>Stats</li>
          <li>Resources</li>
        </ul>
      </DropDownBox>
    </MainBar>
  );
}

const MainBar = styled.div`
  /* background-color: rgb(21, 178, 229); */
  font-family: Poppins, sans-serif;
  display: flex;
  /* align-items: center; */
`;

const MainBarLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 40px;
  padding: 10px;
`;

const LogoTitle = styled.div`
  font-weight: 800;
  font-size: 22px;
`;

const SearchBarBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 100%;

  padding: 1%;
  font-size: 15px;
  border-radius: 10px;
  border: solid 1px;
`;

const DropDownBox = styled.div``;
