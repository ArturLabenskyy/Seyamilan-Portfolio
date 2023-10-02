import styled from "styled-components";

const Wrapped = styled.div`
    height: 5vh;
    display: flex;
    align-items: center;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-secondary);

    h3 {
        font-family: var(--font-en);
        color: var(--color-font);
        margin-left: 0.7rem;
    }
`;

export default Wrapped;
