import React, { useState,useEffect, useContext } from "react";
import "../components/content.css";
import Card from "../components/Card.jsx";
import { AppContext } from "./AppContext";


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
    // const url = `https://newsapi.org/v2/everything?q=${selectedValue}&sortBy=publishedAt&apiKey=0442dbc2127846d78265a93a3edfe509`;
    const url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${selectedValue}&sortBy=publishedAt&apiKey=0442dbc2127846d78265a93a3edfe509`;

    // 8c15607f61e64f44b4dcef8b0080b02f
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
