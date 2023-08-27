import React from "react";
import { Link } from "react-router-dom";


export  function Newsitems( { category, element,title, desc, imageurl, publishedAt,source,author,contenturl,newsDetail} ) {

        return (
            
                <article className="card article-card article-card-sm h-100">
                  <div className="card-image" style={{zIndex:1}}>
                    <div className="post-info"> <span className="text-uppercase">{
                     new Date(publishedAt).toDateString()
                    }</span>
                      <span className="text-uppercase">{source}</span>
                    </div>
                    </div>
                  <a href={contenturl} target="_blank" rel="noreferrer">
                    <div className="card-image">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={imageurl}
                        alt="Post Thumbnail"
                        className="w-100"
                      />
                    </div>
                  </a>
                  
                  <div className="card-body px-0 pb-0">
                    <ul className="post-meta mb-2">
                      <li>
                      <div>By- {author?author:"Unknown"}</div>
                      </li>
                    </ul>
                    <h2>
                      <a href={contenturl} target="_blank" rel="noreferrer" >
                       {title}.
                      </a>
                    </h2>
                    <p className="card-text">
                    {desc}....
                    </p>
                    
                    <div className="content">
           
                        <Link to={`${title}`} onClick={()=>{newsDetail(element)}} >
                        Read Full Article
                      </Link>
                    </div>
                    
                  </div>
                </article>
    
    );
    
  
}




