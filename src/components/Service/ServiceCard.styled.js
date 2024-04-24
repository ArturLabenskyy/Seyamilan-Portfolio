import styled from "styled-components";

const Wrapped = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    font-family: var(--font-main);

    .one {
        height: 100%;
        width: 30%;
        background-color: white;
        transition: width 1.5s ease-in-out;
    }

    .two {
        height: 100%;
        width: 30%;
        background-color: red;
        transition: width 1.5s ease-in-out;
    }

    .one:hover {
        z-index: 500;
        width: 100%;
        transition: width 1.5s ease-in-out;
    }

    .two:hover {
        z-index: 500;
        width: 100%;
        transition: width 1.5s ease-in-out;
    }

    .content-visible {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transform: translateY(0);
        transition: opacity 2s linear, transform 1s ease-in-out;
    }

    .content-hidden {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .one,
        .two {
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: width 1.5s ease-in-out;
        }

        .one {
            background-color: white;
        }

        .two {
            background-color: red;
        }

        .one:hover {
            z-index: 500;
            width: 250%;
            transition: width 1.5s ease-in-out;
        }

        .two:hover {
            z-index: 500;
            width: 250%;
            transition: width 1.5s ease-in-out;
        }

        .content-visible {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 1;
            transform: translateY(0);
            transition: opacity 2s linear, transform 1s ease-in-out;
        }

        .content-hidden {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
        }

        h1 {
            text-align: center;
        }

        button {
            width: 100px;
            background-color: #fe8d53;
            font-size: 20px;
            border-radius: 10px;
            border: none;
        }

        button:hover {
            color: var(--color-font);
            background-color: #a8262a;
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
`;

export default Wrapped;
