// This component represents a news item in the application
// It displays a news article with its thumbnail image (if available) and title
// The title is clickable and links to the full article
import React from 'react';
import Image from "next/image";
import { NewsContainer, ImageContainer, TitleContainer, ContentContainer } from '../styledComponents/news'; 

// Interface defining the structure of a news article
interface News {
    title: string;    // The title of the news article
    link: string;     // URL link to the full article
    thumbnail?: string; // Optional thumbnail image URL
}

export const NewsItem: React.FC<{ news: News }> = ({ news }) => {
    return (
        <NewsContainer>
            <ContentContainer>
                {/* Container for the thumbnail image */}
                <ImageContainer>
                    {/* Render image only if thumbnail URL exists */}
                    {news.thumbnail && <Image
                        src={news.thumbnail} 
                        alt={news.title}
                        objectFit="cover" 
                        width={50} 
                        height={50} 
                    />}
                </ImageContainer>
                {/* Container for the article title and link */}
                <TitleContainer>
                    <a className='title-font' href={news.link}>{news.title}</a>
                </TitleContainer>
            </ContentContainer>
            
        </NewsContainer>
    );
};