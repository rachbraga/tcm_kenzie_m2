import styled from "styled-components";

export const MainWrapper = styled.div`
  border: ${(props) =>
    props.fullEvent ? "1.5px solid green" : "1px solid yellow"};
  margin: 10px 0px;
  width: 95%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const ImgEventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 100px;
    height: 80px;
    border-radius: 60px;


    @media (max-width: 868px) {
      width: 50%;
    }

  }

  .Outros {
    background-color: var(--black);
  }

  @media (max-width: 800px) {
    img {
      width: 80px;
      height: 60px;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 50px;
      height: 40px;
    }
  }
`;

export const InfoEventWrapper = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 1rem;
    color: black;
    font-weight: bold;
    text-transform: lowercase;
  }
  h2,
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--grey);
  }
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--red);
    background-color: aliceblue;
  }

  @media (max-width: 785px) {

    h2 {
      max-width: 200px;
    }
  }

  @media (max-width: 785px) {
    h2,
    h3 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 500px) {
    h2,
    h3 {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 375px) {
    h2,
    h3 {
      font-size: 0.5rem;
    h2,
    h3 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 450px) {
    h2,
    h3 {
      font-size: 0.6rem;
    }
  }
`;

export const ButtonEventWrapper = styled.div`
  /* min-width: 30%; */
  height: 100%;
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: var(--orange);
  /* button {
    max-width: 90%;
    max-width: 185px;
    margin: 0;
  } */
`;

export const NewInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

export const GuestsInfoWrapper = styled.div`
  text-align: center;
`;
