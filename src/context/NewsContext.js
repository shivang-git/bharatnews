import { React, createContext, useState } from "react";

const NewsContext = createContext();

const NewsState = (props) => {
    const [content, setcontent] = useState({});
    const newsDetail = (cont) => {
        setcontent({
          title: cont.title,
          newsdetail: cont.content,
        });
        return true
    };

      
  return (
    <NewsContext.Provider value={{newsDetail,content}}>
      {props.children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsState };
