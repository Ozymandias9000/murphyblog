import React from "react";
import MainDiv from "../styles/MainDiv";
import MainP from "../styles/MainP";

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <MainDiv>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <MainP>{description}</MainP>
    </MainDiv>
  );
};

export default TitleAndDescription;
