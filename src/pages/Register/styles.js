import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 270px;
  }

  @media (min-width: 900px) {
    height: 100%;
    img {
      width: 600px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  h1 {
    margin-bottom: 8px;
    text-align: center;
    font-size: 20px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 900px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity:1;
    transform: translateX(0px)
    
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    width: 290px;
    background-color: var(--white-dark);
    border-radius: 5px;
    align-items: left;
    font-family: "Nunito";

    > div {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    label {
      margin: 10px;
      margin-bottom: 0;
      margin-left: 5%;
      font-family: "Nunito", sans-serif;
    }
    button {
      margin-left: 10%;
      margin-bottom: 10%;
      width: 80%;
    }
    @media (min-width: 900px) {
      width: 400px;
    }
  }
`;
export const CheckBoxContainer = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  margin-left: 8%;

  @media (min-width: 900px) {
  }
`;

export const DivLogin = styled.div`
  margin: 20px auto;
  p {
    line-height: 25px;
  }
`;
