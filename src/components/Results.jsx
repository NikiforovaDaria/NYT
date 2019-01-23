import React from 'react';

const Results = (article) => {

    const cdate = article.pub_date;
    return <li className="list-group-item list-group-item-action">
            <h4>{article.headline.main}</h4>
            <p>{article.abstract}</p>
            <h6>Date published: {new Date(cdate).toDateString()}</h6>
            <a href={article.web_url} target="_blank">Read more...</a>
            </li>;
};
export default Results;
