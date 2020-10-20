import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialIconTextButtonsFooter(props) {
  return (
    <Container {...props}>
      <ButtonWrapper1>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="timer"
            style={{
              backgroundColor: "transparent",
              color: "#616161",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
          <Btn1Text>Recent</Btn1Text>
        </ButtonOverlay>
      </ButtonWrapper1>
      <ActiveButtonWrapper>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="heart"
            style={{
              backgroundColor: "transparent",
              color: "#3f51b5",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
          <ActiveContent>Favorites</ActiveContent>
        </ButtonOverlay>
      </ActiveButtonWrapper>
      <ButtonWrapper2>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="map-marker-radius"
            style={{
              backgroundColor: "transparent",
              color: "#616161",
              fontSize: 24,
              opacity: 0.8
            }}
          ></MaterialCommunityIconsIcon>
          <Btn2Text>Nearby</Btn2Text>
        </ButtonOverlay>
      </ButtonWrapper2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: row;
  box-shadow: 0px -2px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const ButtonWrapper1 = styled.div`
  flex: 1 1 0%;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  border: none;
  display: flex;
`;

const Btn1Text = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: #9E9E9E;
  background-color: transparent;
  padding-top: 4px;
`;

const ActiveButtonWrapper = styled.div`
  flex: 1 1 0%;
  padding-top: 6px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  border: none;
  display: flex;
`;

const ActiveContent = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #3f51b5;
  background-color: transparent;
  padding-top: 4px;
`;

const ButtonWrapper2 = styled.div`
  flex: 1 1 0%;
  padding-top: 8px;
  padding-bottom: 10px;
  padding-horizontal: 12px;
  min-width: 80px;
  max-width: 168px;
  align-items: center;
  flex-direction: column;
  border: none;
  display: flex;
`;

const Btn2Text = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: #9E9E9E;
  background-color: transparent;
  padding-top: 4px;
`;

export default MaterialIconTextButtonsFooter;
