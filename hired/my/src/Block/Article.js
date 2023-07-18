import React from 'react';
import './Article.css'


const Article = ({imgUrl, date, title}) => {
    return (
        <div className='gpt3__blog-container-article'>
            <div className="gpt3__blog-container-article-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="gpt3__blog-container-article-contenr">
                <div className="">
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full Article</p>
            </div>
        </div>
    );
};

export default Article;