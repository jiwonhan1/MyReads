import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    size,
    padding,
    right,
    bottom,
    src,
    is_float,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton>{text} </FloatButton>
      </React.Fragment>
    );
  }
  const styles = {
    text: false,
    margin: margin,
    size: size,
    padding: padding,
    right: right,
    bottom: bottom,
    src: src,
  };
  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  padding: "12px, 0px",
};

const ElButton = styled.div`
  position: absolute;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: #8b4513;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 16px;
  border-radius: 50%;
  background: #8b4513;
  width: 50px;
  height: 50px;
  color: #ffffff;
  font-size: 36px;
  font-eight: 800;
  text-align: center;
  vertical-align: middle;
  border: none;
`;
export default Button;
