import React from "react";
import GlobalStyle from "../globalStyles";
import InfoSection from "../components/InfoSection//Info";
import { InfoData, InfoData2 } from "../data/InfoData";

const about = () => {
  return (
    <>
      <GlobalStyle />
      <InfoSection {...InfoData} imgStart='true' />
      <InfoSection {...InfoData2} />
    </>
  );
};

export default about;
