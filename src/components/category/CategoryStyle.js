import styled from "styled-components/macro";

export const CategoryItemWrapper = styled.div`
    border: 1px solid #ddd;
    border-radius: 1%;
    width: 100%;
    height: 90%;
    button {
        border: none;
        outline: none;
        background: none;
    }
    button:hover{
        background-color: #ffffff;
    }
    
`;

export const NewsByCategoryWrapperStyle = styled.div`

    display: ${props => props.visible ? "flex" : "none"};
    flex-wrap: nowrap;
    justify-content: row;
    font-family: "Arial, Helvetica", sans-serif;
    overflow: hidden;
`;

export const CategoryTitleStyle = styled.div`
    padding: 1%;
    border: 1px solid #ddd;
    transition: background-color 1.5s ease;
    background-color: #ffffff9e;
    &:hover {
        background-color: #f3ecec;
    }
    a {
        color: #a52a2a;
        padding: 1%;
        font-size: 1vw;
    }
`;