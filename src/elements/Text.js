import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, margin, children, border_bottom } = props;
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    border_bottom: border_bottom,
  };
  return <P {...styles}>{children}</P>;
};
// .bookshelf-title {
//   border-bottom: 1px solid #dedede;
// }
Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  border_bottom: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.border_bottom ? `border-bottom: 1px solid #dedede;` : "")}
`;

export default Text;
