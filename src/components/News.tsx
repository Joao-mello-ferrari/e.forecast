import React from 'react';
import Image from "next/image";
import { NewsContainer, ImageContainer, TitleContainer, ContentContainer } from '../styledComponents/news'; 

interface News {
    title: string;
    link: string;
    thumbnail?: string;
}

export const NewsItem: React.FC<{ news: News }> = ({ news }) => {
    return (
        <NewsContainer>
            <ContentContainer>
                <ImageContainer>
                    {news.thumbnail && <Image
                        src={news.thumbnail} 
                        alt={news.title}
                        objectFit="cover" 
                        width={50} 
                        height={50} 
                    />}
                </ImageContainer>
                <TitleContainer>
                    <a className='title-font' href={news.link}>{news.title}</a>
                </TitleContainer>
            </ContentContainer>
            
        </NewsContainer>
    );
};