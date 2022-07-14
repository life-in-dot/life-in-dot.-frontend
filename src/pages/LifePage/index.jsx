import styled from "styled-components";

import LifeDot from "../../components/LifeDot";

function LifePage() {
  return (
    <Wrapper>
      <LifeDot></LifeDot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  height: calc(100vh - 70px);
  width: 100vw;
`;

export default LifePage;
