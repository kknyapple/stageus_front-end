import React from "react";
import styled from "styled-components";

import { DivTag, ButtonTag } from "../../style/tag";

const HeaderMiddleBox = styled(DivTag)``;

const Search = styled(DivTag)`
  margin-left: 40px;
  display: flex;
  width: 50vw;
`;

const Input = styled.input`
  display: flex;
  font-size: 16px;
  height: 40px;
  border-radius: 3px;
  flex-grow: 1;
  border: 1px solid rgb(172, 170, 170);

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SearchButton = styled(ButtonTag)`
  width: 60px;
  height: 44px;
  margin-left: -1px;
  border-radius: 3px;
  background-color: rgb(249, 249, 249);
  border: 1px solid rgb(172, 170, 170);

  @media screen and (max-width: 600px) {
    background-color: white;
    border: 0px solid transparent;
  }
`;

const SearchButtonImg = styled.img`
  height: 28px;
  width: auto;
`;

const VoiceButton = styled(ButtonTag)`
  border-radius: 50%;
  margin-left: 9px;
  background-color: rgb(249, 249, 249);
`;

const VoiceButtonImg = styled.img`
  height: 28px;
  width: auto;
`;

export default function HeaderMiddleContainerComponent() {
  return (
    <HeaderMiddleBox>
      <Search>
        <Input type="text" placeholder="검색" />
        <SearchButton>
          <SearchButtonImg src={`./images/search.jpg`} />
        </SearchButton>
        <VoiceButton>
          <VoiceButtonImg src={`./images/voice.jpg`} />
        </VoiceButton>
      </Search>
    </HeaderMiddleBox>
  );
}
