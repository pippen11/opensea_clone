import HeaderComponent from "./HeaderComponent";
import DropDownContainer from "./dropdown/DropDownContainer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
export default function HeaderContainer() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <HeaderComponent setDisplay={setDisplay}></HeaderComponent>
      {display ? <DropDownContainer></DropDownContainer> : <></>}
    </>
  );
}
