import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { setAccountImg } from "../../recoil/common.js";
import { accountData } from "../../data/accountData.js";
import { DivTag, ButtonTag } from "../../style/tag.js";

const HeaderEndBox = styled(DivTag)`
  width: 220px;
  padding-right: 10px;
`;

const MakingVideoButton = styled(ButtonTag)`
  height: 40px;
  width: 50px;
  border-radius: 50%;
  background-color: transparent;
`;

const MakingVideoButtonImg = styled.img`
  height: 40px;
  width: auto;
`;

const NoticeButton = styled(ButtonTag)`
  height: 40px;
  width: 50px;
  border-radius: 50%;
  background-color: transparent;
`;

const NoticeButtonImg = styled.img`
  height: 40px;
  width: auto;
`;

const AccountButton = styled(ButtonTag)`
  height: 40px;
  width: 80px;
`;

const AccountButtonImg = styled.img`
  height: 30px;
  width: 30px;
`;

export default function HeaderEndContainerComponent() {
  const [img, setImg] = useRecoilState(setAccountImg);

  useEffect(() => {
    setImg(accountData.img);
  }, [img]);

  return (
    <HeaderEndBox>
      <MakingVideoButton>
        <MakingVideoButtonImg src={`./images/video.jpg`} />
      </MakingVideoButton>
      <NoticeButton>
        <NoticeButtonImg src={`./images/notice.jpg`} />
      </NoticeButton>
      <AccountButton>
        <AccountButtonImg src={`${img}`} />
      </AccountButton>
    </HeaderEndBox>
  );
}
