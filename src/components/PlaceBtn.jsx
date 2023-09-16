import styled from 'styled-components';

export default function PlaceBtn({
  imgUrl,
  name,
  category,
  location,
  onClick,
  add,
}) {
  return (
    <Box onClick={onClick}>
      <img
        src="https://cdn.myro.co.kr/prod/image/place/Jeju/46_1ddb422e-54d4-4fba-8728-112940d69eda"
        alt="img"
        style={{ width: '56px', height: '56px', borderRadius: '5px' }}
      />
      <TextBox>
        <TitleLayout>
          <Title>경복궁</Title>
          <Add onClick={add}>+</Add>
        </TitleLayout>
        <Loca>
          <span style={{ color: '#63BEC6', marginRight: '4px' }}>명소</span>
          서울특별시 종로구 사직로 161
        </Loca>
      </TextBox>
    </Box>
  );
}

const Box = styled.button`
  margin: 20rem 20rem;
  width: 320px;
  height: cal(88-32) px;
  border-radius: 6px;
  padding: 18px;
  display: flex;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16); /* 그림자 조절 */
  transition: box-shadow 0.3s ease-in-out; /* 그림자 변화를 부드럽게 만듦 */
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.24); /* 마우스 호버 시 그림자 증가 */
  }
`;

const TextBox = styled.div`
  width: 330px;
  height: 54px;
  margin-left: 12px;
`;

const TitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Loca = styled.div`
  font-size: 14px;
`;

const Add = styled.button`
  width: 20px;
  height: 20px;
  background-color: #adadad;
  border-radius: 3px;
  text-align: center;
  line-height: 20px;
  color: white;
  cursor: pointer;
`;
