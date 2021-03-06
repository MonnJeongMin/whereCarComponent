import React from 'react';
import styled from 'styled-components';
import { ManagerBox } from 'components/Admin';
import Carousel from './Carousel';
import WhereCarinfo from './WhereCarinfo';

const ContentWrapper = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

/*
ManagerBox ::: 
- display ==> true 설정시 phone 뷰에서 사라짐
- width ===> phone wide 시의 보이는 사이즈를 설정 가능
*/

export default function HomeController() {
  return (
    <ContentWrapper>
      <ManagerBox width={{wide: '30rem', phone: '20rem'}}>
        <WhereCarinfo/>
      </ManagerBox>
      <ManagerBox width={{wide: '30rem', phone: '20rem'}}>
        <Carousel />
      </ManagerBox>
    </ContentWrapper>
  )
} 