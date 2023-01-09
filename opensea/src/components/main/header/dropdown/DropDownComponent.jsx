import styled from "styled-components";
import nfticon from "./icon/allnfts-light.svg";
import articon from "./icon/art-light.svg";
import collectiblesicon from "./icon/collectibles-light.svg";
import domainnamesicon from "./icon/domain-names-light.svg";
import musicicon from "./icon/music-light.svg";
import photographyicon from "./icon/photography-category-light.svg";
import sportsicon from "./icon/sports-light.svg";
import TradingCardsicon from "./icon/trading-cards-light.svg";
import Utilityicon from "./icon/utility-light.svg";
import VirtualWorldsicon from "./icon/virtual-worlds-light.svg";

export default function DropDownComponent() {
  return (
    <DropDownExploreBox>
      <Nft>
        <NftImg src={nfticon} alt="" />
        <strong>All NFTs</strong>
      </Nft>
      <Art>
        <ArtImg src={articon} alt="" />
        <strong>Art</strong>
      </Art>
      <Collectibles>
        <CollectiblesImg src={collectiblesicon} alt="" />
        <strong>Collectibles</strong>
      </Collectibles>
      <DomainNames>
        <DomainNamesImg src={domainnamesicon} alt="" />
        <strong>Domain Names</strong>
      </DomainNames>
      <Music>
        <MusixImg src={musicicon} />
        <strong>Music</strong>
      </Music>
      <Photography>
        <PhotographyImg src={photographyicon} />
        <strong>Photography</strong>
      </Photography>
      <Sports>
        <SportsImg src={sportsicon} />
        <strong>Sports</strong>
      </Sports>
      <TradingCards>
        <TrandingCardImg src={TradingCardsicon} />
        <strong>Tranding Cards</strong>
      </TradingCards>
      <Utility>
        <UtilityImg src={Utilityicon} />
        <strong>Utility</strong>
      </Utility>
      <VirtualWorlds>
        <VirtualWorldsImg src={VirtualWorldsicon} />
        <strong>Virtual Worlds</strong>
      </VirtualWorlds>
    </DropDownExploreBox>
  );
}

const DropDownExploreBox = styled.div`
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  position: absolute;
  margin-top: 30px;
`;

const Nft = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const NftImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Art = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const ArtImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Collectibles = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const CollectiblesImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const DomainNames = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const DomainNamesImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Music = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const MusixImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Photography = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const PhotographyImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Sports = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const SportsImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const TradingCards = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;
const TrandingCardImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const Utility = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const UtilityImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;

const VirtualWorlds = styled.div`
  display: flex;

  padding: 15px;
`;

const VirtualWorldsImg = styled.img`
  width: 23px;
  padding: 0 5px;
`;
