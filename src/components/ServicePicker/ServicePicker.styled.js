import styled from "styled-components";
import img1 from "../../assets/media/design.jpg";
import img2 from "../../assets/media/photo.jpg";

const Wrapped = styled.div`
    width: 90%;
    height: 84%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    font-family: var(--font-ru);

    .one,
    .two {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 30%;
        transition: width 1.5s ease-in-out, filter 1.5s ease-in-out;
        filter: grayscale(100%);
    }

    .one {
        background: url(${img1}) center/cover no-repeat;
        transition: width 1.5s ease-in-out;
    }

    .two {
        background: url(${img2}) center/cover no-repeat;
    }

    .one:hover,
    .two:hover {
        z-index: 500;
        width: 100%;
        transition: width 1.5s ease-in-out, filter 1.5s ease-in-out;
        filter: none;
    }

    .one:hover {
        background: url(${img1}) no-repeat center center / cover;
    }

    .two:hover {
        background: url(${img2}) no-repeat center center / cover;
    }

    .content-visible {
        width: 100%;
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 1s linear 1s;
    }

    .content-hidden {
        width: 100%;
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 1s linear 0s;
    }

    h1 {
        color: var(--color-font);
        text-shadow: 0.5px 0.5px #05f6fa;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: var(--color-font);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .click-icon {
        width: 5rem;
        height: 2.5rem;
        margin: auto;
        color: var(--color-font);
        text-shadow: 2px 2px var(--color-secondary);
        animation: pulse 1s infinite;
    }

    .click-icon:hover {
        color: #08f9f7;
        transition: color 1s ease;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .one,
        .two {
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .one:hover,
        .two:hover {
            z-index: 500;
            width: 250%;
            transition: width 1.5s ease-in-out;
        }

        a {
            font-size: 27px;
            font-weight: 500;
            text-shadow: 2px 2px var(--color-secondary);
        }

        .click-icon {
            margin: auto;
            color: var(--color-font);
            text-shadow: 2px 2px var(--color-secondary);
        }
    }
    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }

    //  Desktops + large screen FullHD
    @media only screen and (min-width: 1025px) and (max-width: 1920px) {
        .one:hover,
        .two:hover {
            z-index: 500;
            width: 80%;
            transition: width 1.5s ease-in-out;
        }
    }

    // Extra large + TV screen 2K + 4K
    @media only screen and (min-width: 1921px) {
        .one:hover,
        .two:hover {
            z-index: 500;
            width: 70%;
        }

        h1 {
            font-size: 4rem;
        }

        .click-icon {
            height: 8rem;
            width: 4rem;
        }
    }
`;

export default Wrapped;
