import React from "react";
import styled from "styled-components";

const Head = (props) => {
  return (
    <React.Fragment>
      <Title>
        <p>My Reads</p>
      </Title>
    </React.Fragment>
  );
};

const Title = styled.div`
  color: white;
  font-size: 32px;
  text-align: center;
  width: 100%;
  background-color: #8b4513;
`;

export default Head;
