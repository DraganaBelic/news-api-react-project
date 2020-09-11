import styled from "styled-components/macro";

export const ThumbnailDivStyle = styled.div`
  border: 1px solid #ddd;
  border-radius: 5%;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 3px #ddd;
  a {
    padding: 2%;
    float: right;
    font-size: 1vw;
    color: #a52a2a;
  }
  flex-basis: 27%;
  margin: 2%;
  flex-shrink: 0;
  text-align: justify;
`;

export const ThumbnailTitleStyle = styled.p`
  padding: 1% 5% 1% 5%;
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0;
`;

export const ThumbnailImageStyle = styled.div`
  margin-bottom: 5px;
  img {
    padding: 5%;
    display: block;
    max-width: 220px;
    max-height: 200px;
    width: auto;
    height: auto;
  }
  @media only screen and (max-width: 1154) {
    padding: 5%;
    display: block;
    max-width: 120px;
    max-height: 200px;
    width: auto;
    height: auto;
  }
`;

export const ThumbnailContentStyle = styled.div`
  padding: 1% 5% 1% 5%;
  font-size: 14px;
  div {
    font-size: 14px;
  }
`;
