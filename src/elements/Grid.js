import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    is_flex_column,
    width,
    height,
    margin,
    padding,
    children,
    center,
    background_color,
  } = props;
  const styles = {
    is_flex: is_flex,
    is_flex_column: is_flex_column,
    height: height,
    width: width,
    margin: margin,
    padding: padding,
    center: center,
    background_color: background_color,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_flex_column: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  center: false,
  background_color: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; flex-wrap:wrap`
      : ""}
  ${(props) =>
    props.is_flex_column
      ? `display: flex; align-items: center;  flex-direction: column; position: relative`
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.background_color
      ? `background-color: ${props.background_color};`
      : ""}
`;
export default Grid;
