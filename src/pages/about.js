import React from "react";
import GlobalStyle from "../globalStyles";
import InfoSection from "../components/InfoSection//Info";
import InfoSection2 from "../components/InfoSection2/Info";
import { InfoData, InfoData2 } from "../data/InfoData";

const about = () => {
  return (
    <>
      <GlobalStyle />
      <InfoSection {...InfoData} />
      <InfoSection2 {...InfoData2} />
    </>
  );
};

export default about;
