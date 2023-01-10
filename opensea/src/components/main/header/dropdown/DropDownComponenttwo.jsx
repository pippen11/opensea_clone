import styled from "styled-components";

export default function DropDownComponenttwo() {
  return (
    <DropDownBox>
      <Calender>
        <strong>Calendar</strong>
      </Calender>
      <Learnmore>
        <strong>Learn more</strong>
      </Learnmore>
    </DropDownBox>
  );
}

const DropDownBox = styled.div`
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  position: absolute;
  margin-top: 30px;
`;

const Calender = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const Learnmore = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;
