import React, { useState, useEffect,useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { Newsitems } from "./Newsitems";
import placeholder from "./ph.png";
import Scroll from "./Scroll";
import Spinner from "./Spinner";

export default function News(props) {
  const {newsDetail} = useContext(NewsContext)
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, settotalPages] = useState(0);
  
  document.title = `${props.category} - Kutumbh News`;
  let updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=2ab57204760542da99ff4e59ce2e9e2b&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
    settotalPages(data.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
    
    // eslint-disable-next-line
  }, []);

  const handlePrevbtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=2ab57204760542da99ff4e59ce2e9e2b&page=${page - 1}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
    settotalPages(data.totalResults);
    setLoading(false);
    setPage(page - 1);
  };

  const handleNextbtn = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=2ab57204760542da99ff4e59ce2e9e2b&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
    settotalPages(data.totalResults);
    setLoading(false);
    setPage(page + 1);
  };

  return (
    <>
       <div className="container">
        <h2 className="section-title">
          <u> {props.Headline} </u>
        </h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map(
              (element) =>{
                <div className="col-md-4 mb-3" key={element.url}>
                  <Newsitems
                    element={element}
                    title={element.title}
                    desc={element.description}
                    imageurl={
                      !element.urlToImage ? placeholder : element.urlToImage
                    }
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                    sourceid={element.source.id}
                    author={element.author}
                    category={props.category}
                    contenturl={element.url}
                    newsDetail={newsDetail}
                  />
                </div>
              }
            )
            }
        </div>
      
      {!loading && (
        <div className="container  d-flex justify-content-evenly mb-3">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={handlePrevbtn}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page + 1 > Math.ceil(totalPages / props.pageSize)}
            className="btn btn-dark"
            onClick={handleNextbtn}
          >
            Next &rarr;
          </button>
        </div>
      )}
      </div>
      <Scroll />
    </>
  );
}
