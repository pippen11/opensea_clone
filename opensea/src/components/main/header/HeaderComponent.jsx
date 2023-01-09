import styled from "styled-components";
import { useState } from "react";
// import { ReactComponent as Iconone } from "./icon/magnifying-glass-solid.svg";
//이렇게 컴포넌트로사용가능
import searchicon from "./icon/magnifying-glass-solid.svg";
import { ReactComponent as UserProfile } from "./icon/user-regular.svg";
// import { ReactComponent as Wallet } from "./icon/wallet-solid.svg";
import { VscBrowser } from "react-icons/vsc";
import { ReactComponent as Cart } from "./icon/cart-shopping-solid.svg";
import DropDownContainer from "./dropdown/DropDownContainer";

export default function HeaderComponent({}) {
  const [display, setDisplay] = useState(false);
  return (
    <MainBar>
      <MainBarLogo>
        <LogoImg src="https://opensea.io/static/images/logos/opensea.svg"></LogoImg>
        <LogoTitle>OpenSea</LogoTitle>
      </MainBarLogo>
      <SearchBarBox>
        {/* <Iconone width="20" fill="grey" /> */}
        <ImgPosition>
          <SearchIcon src={searchicon} />
        </ImgPosition>
        <SearchBar placeholder="     Search item,collections,and accounts" />
      </SearchBarBox>
      <DropDownBox>
        <DropDownMenu>
          <div className="test">
            <Exploreli
              onMouseEnter={() => {
                setDisplay(true);
              }}
              onMouseOut={() => {
                setDisplay(false);
              }}
            >
              Explore
              {display ? <DropDownContainer></DropDownContainer> : <></>}
            </Exploreli>
          </div>

          <li>Drops</li>
          <li>Stats</li>
          <li>Resources</li>
          <li>
            <UserProfile width="20" />
          </li>
          <li>
            <VscBrowser size={25} />
          </li>
          <li>
            <Cart width="25" />
          </li>
        </DropDownMenu>
      </DropDownBox>
    </MainBar>
  );
}
const Exploreli = styled.li``;

const ImgPosition = styled.div`
  position: fixed;

  left: 229px;
  top: 21px;
`;

const SearchIcon = styled.img`
  width: 15px;

  filter: invert(52%) sepia(10%) saturate(75%) hue-rotate(357deg)
    brightness(94%) contrast(83%);
`;

const MainBar = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: space-evenly;
`;

const MainBarLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 40px;
  padding-left: 50px;
`;

const LogoTitle = styled.div`
  font-weight: 800;
  font-size: 22px;
  padding: 15px;
`;

const SearchBarBox = styled.div`
  width: 50%;
  display: flex;
  padding-left: 10px;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 65%;

  font-size: 15px;
  border-radius: 10px;
  border: solid 1px;
`;

const DropDownBox = styled.div`
  width: 40%;
`;

const DropDownMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0px;
  list-style: none;
  font-weight: 800;
  .test {
  }
`;
