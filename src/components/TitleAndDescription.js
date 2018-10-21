import React from "react";
import MainDiv from "../styles/MainDiv";
import styled from "styled-components";
import { Link } from "gatsby";

const MainP = styled.p`
  text-align: center;
  margin-top: 0;
  opacity: 0.5;
`;

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <MainDiv>
      <Link to="/" style={{ color: "#131313" }}>
        <h2 style={{ marginBottom: 0 }}>{title}</h2>
        <MainP>{description}</MainP>
      </Link>
    </MainDiv>
  );
};

export default TitleAndDescription;
