'use client'

import React from 'react'; // Import React
import useArticleStore from '../store/articles';
export interface TypeArticle {
  article_name: string;
  created_date: string;
  content: string;
  topic: string;
}


// Define the prop type for the Container component
interface ContainerProps {
  article: TypeArticle | null;
}

const Container = () => { // Destructure article from props
  const articles = useArticleStore(s => s.article)

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20 flex flex-col gap-4">
      {articles.map((article, index) => (
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-serif" key={index}>
          <div className="font-sans">
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {article.article_name}
            </h1>
          </div>
          <p className="py-6">
            {article.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Container;

