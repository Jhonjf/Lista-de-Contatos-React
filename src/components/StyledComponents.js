import styled from 'styled-components';

export const ContactListWrapper = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ContactItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 14px;

&:hover {
    background-color: #0056b3;
    }

  & + & {  // Espaçamento entre botões
    margin-left: 10px;
    }
`;

export const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;


export const FormWrapper = styled.form`
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
