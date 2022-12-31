import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./main";

export default function Components() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}
