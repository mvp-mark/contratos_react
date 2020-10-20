import React, { Component } from "react";
import styled, { css } from "styled-components";
import Navbar from "./Navbar";

function MaterialHeader1(props) {
  return (
    <Container {...props}>
      <Navbar
        style={{
          position: "absolute",
          top: 5,
          left: 0,
          height: 48,
          right: 0
        }}
      ></Navbar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #3F51B5;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

export default MaterialHeader1;
