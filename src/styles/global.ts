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
        
        --Grey-3:rgb(211, 211, 211);
        --Grey-2:rgb(215, 215, 215);
        --Grey-1:rgb(101, 101, 101);
        --Grey-0:rgb(222, 230, 235);
        
        --Blue-2:rgb(71, 124, 190);
        --Blue-1:rgb(192, 222, 246);
        --Blue-0:rgb(117, 170, 238);

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
