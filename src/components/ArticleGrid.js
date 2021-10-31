import React from "react";
import Link from "@docusaurus/Link";
const ArticleGrid = ({ articles }) => {
  if (!articles) return <p>Not working</p>;
  return (
    <div className="articles-grid">
      <div className="grid-row">
        {articles.map((article, idx) => (
          <div className="card shadow--sm margin--sm" key={`${article.title}-${idx}`}>
            <div className="card__header">
              <h3>{article.title}</h3>
            </div>
            <div className="card__body">
              <p>{article.desc}</p>
            </div>
            <div className="card__footer">
              <Link
                to={article.link}
                className="button button--lg button--secondary button--block text--uppercase"
              >
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
