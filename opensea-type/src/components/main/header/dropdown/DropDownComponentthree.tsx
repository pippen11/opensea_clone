import styled from "styled-components";

export default function DropDownComponenttwo() {
  return (
    <DropDownBox>
      <Rankings>
        <strong>Rankings</strong>
      </Rankings>
      <Activity>
        <strong>Activity</strong>
      </Activity>
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

const Rankings = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

const Activity = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;
