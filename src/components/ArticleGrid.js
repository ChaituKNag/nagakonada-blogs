import React from "react";
import Link from "@docusaurus/Link";
const ArticleGrid = ({ articles }) => {
  if (!articles) return <p>Not working</p>;
  return (
    <div className="container articles-grid">
      <div className="row">
        {articles.map((article, idx) => (
          <div className="col col--6" key={`${article.title}-${idx}`}>
            <div className="card shadow--md margin--sm">
              <div className="card__header">
                <h3>{article.title}</h3>
              </div>
              <div className="card__body">
                <p>{article.desc}</p>
              </div>
              <div className="card__footer">
                <Link
                  to={article.link}
                  className="button button--primary button--block"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
