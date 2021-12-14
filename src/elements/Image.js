import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, width, height } = props;

  const styles = {
    src: src,
    width: width,
    height: height,
    shape: shape,
  };
  return (
    <React.Fragment>
      <ImageDefault {...styles} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "",
  src: "",
  width: 36,
  height: 50,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  border: 2px solid red;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;
export default Image;
