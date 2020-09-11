import styled from "styled-components/macro";

export const HeaderStyle = styled.div`
  width: 99%;
  background: #ffffff;
  border: 1px solid #ddd;
  margin-bottom: 1px;
  display: inline-block;
  font-family: "Arial, Helvetica", sans-serif;
  position: fixed;
  overflow: hidden;
  margin-top: -8px;
  height: 67px;
`;

export const HeaderItemStyle = styled.div`
  width: ${(props) => (props.small ? "2%" : "10%")};
  border-right: 1px solid #ddd;
  border-left: ${(props) => (props.left_border ? "1px solid #ddd" : "none")};
  font-size: 1.3vw;
  padding: ${(props) => (props.small ? "1%" : "1% 3% 1% 3%")};
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
  text-align: center;
  font-weight: 700;
  color: #a52a2a;
  // font-size: 25px;
  &:hover {
    background-color: #f1e6e6;
  }
  a{
    text-decoration: none;
    font-weight: 900;
    color: #544141;
  }
  background-color: ${(props) => (props.active ? "#f1e6e6" : "#ffffff")};
  float: ${(props) => (props.right ? "right" : "left")};
  div {
      border: none;
      background: transparent;
      font-size: 1.3vw;
      outline: none;
  }
  div:focus {
      border: none;
  }
`;
