import React, { useState,useEffect, useContext } from "react";
import "../components/content.css";
import Card from "../components/Card.jsx";
import { AppContext } from "./AppContext";
import dotenv from 'dotenv';

dotenv.config();

function createCard(article, index){
  return (
    <Card
      key={index}
      src={article.urlToImage}
      title={article.title}
      summary={article.description}
      upload_date={article.publishedAt}
      source_link={article.url}
    />
  );
}

function Content() {
  const [articles, setArticles] = useState(null);
  const { selectedValue } = useContext(AppContext);

  async function search(selectedValue) {
    const url = `https://newsapi.org/v2/everything?q=${selectedValue}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`;
    // process.env.ANOTHER_KEY
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    // console.log(data.choices[0].message.content);
    // console.log(articles);
  }
  useEffect(() => {
    if (selectedValue) {
      search(selectedValue);
    }
  }, [selectedValue]);
  // console.log(articles);
  // const result = JSON.parse(articles);
  return (
    <div className="content">
      {
        articles ? articles.map((article, index) =>
          createCard(article, index)
        ) : "Loading..."
      }
    </div>
  );
}

export default Content;
