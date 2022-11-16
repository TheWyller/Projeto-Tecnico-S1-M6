import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{

        --white-1:rgb(245,247,250);
        
        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF;

    }
    body{
        background: white;       

        background-color: var(--white-1);
    }

    h1 ,h2 ,h3, h4{

        font-weight: 700;
        color: #1d293f;
        text-shadow: 0.1px 0.1px 1px #1d293f;
    }

    button{

        cursor: pointer;
    }

    a{
        text-decoration:none
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`;
