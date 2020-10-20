import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import MaterialHeader1 from "../components/MaterialHeader1";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import SignInSide from '../components/Login';
import axios from "axios";



function Login(props) {

  return (
    <>
      {/* <MaterialHeader1
        style={{
          height: 56,
          position: "absolute",
          left: 0,
          top: 0,
          right: 0
        }}
      ></MaterialHeader1> */}
      <Center>
        <SignInSide/>
        {/* <LoginComp>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{
              height: 43,
              width: 375,
              margin: 16
            }}
            name="login"
            label="Login"
          />

          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{
              height: 43,
              width: 375,
              margin: 16
            }}
            name="senha"
            label="Senha"
          />
          <Checkbox
            checked//={checked}
            // inputProps={{ 'aria-label': 'primary checkbox' }}
            label="Lembrar desta senha"
            style={{
              height: 40,
              width: 50,
              margin: 8
            }}
          ><p>Lembrar desta senha</p>
          </Checkbox>
          <Button
            varcolor="primary"iant="contained" 
            style={{
              height: 36,
              width: 100,
              position: "absolute",
              left: 265,
              top: 189
            }}
            href="/Produtos"
            varcolor="primary"
          > Entrar</Button>
        </LoginComp> */}
      </Center>
    </>
  );
}

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: all;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const LoginComp = styled.div`
  width: 375px;
  height: 86px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

export default Login;
