import styled from 'styled-components'

export const NewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
`;

export const TitleContainer = styled.div`
    flex: 1 1 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    .title-font {
        font-size: 0.8rem;
        font-weight: 500;
        color: #888888;
        width: 100%;
        &:hover {
            font-weight: 1000;
        }
    }
`;