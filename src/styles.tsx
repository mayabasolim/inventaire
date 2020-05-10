import styled from "styled-components";

//form
export const Label = styled.label`
    font-size: 1.2rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1.2rem;
`;
export const InputRanger = styled.input`
    width: 45%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1.2rem;
`;
export const Button = styled.button`
    background-color: #ff0066;
    color: white;
    margin: 8px 0;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
`;

//____________________

export const Header = styled.h1`
    font-size: 1.2rem;
    padding: 1.6rem;
    border-bottom: 1px solid #d8d8d8;
`;
export const Back = styled.button`
    background-color: #e6e6e6;
    color: black;
    margin: 8px 0;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: left;
`;

export const Title = styled.div`
    padding: 1.6rem;
    padding-bottom: 0.1px;
    font-size: 1.8rem;
    color: #002080;
`;

export const SubTitle = styled.div`
    padding: 1.6rem;
    padding-bottom: 0.1px;
    font-size: 1.8rem;
`;

export const InfosTitle = styled.p`
    padding: 1.6rem;
`;

export const Column = styled.div<{ width: number }>`
    padding: 1.6rem;
    width: ${(props) => props.width}%;
`;

export const Content = styled.div`
    display: flex;
`;

//Table
export const TABLE = styled.table`
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;
export const TH = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #002080;
    color: white;

    border: 1px solid #ddd;
    padding: 8px;
`;
