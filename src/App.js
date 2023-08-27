import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import Footer from './components/Footer';
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsContext, NewsState } from "./context/NewsContext";
import Newsdetail from "./components/Newsdetail";

export default function App() {
    let pageSize=6

    // const {content} = useContext(NewsContext)
    return (
      <>
      <NewsState>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/*"  element={<News key="home" pageSize={pageSize} Headline="Top Headlines - India" category="general"/>}/>
          <Route path="general/*"  element={<News key="general" pageSize={pageSize} Headline="Top Headlines - India" category="general"/>}>
            {/* <Route path={`${content.title}`}  element={<Newsdetail item={content.newsdetail}/>} /> */}
            </Route>
          <Route path="business/*" element={<News key="business" pageSize={pageSize} Headline="Business Top Headlines - India" category="business"/>} />
          <Route path="entertainment/*" element={<News  key="entertainment" pageSize={pageSize} Headline="Entertainment Top Headlines - India" category="entertainment"/>} />
          <Route path="health/*"  element={<News key="health" pageSize={pageSize} Headline="Health Top Headlines - India" category="health"/>} />
          <Route path="science/*"  element={<News key="science" pageSize={pageSize} Headline="Science Top Headlines - India" category="science"/>} />
          <Route path="sports/*"  element={<News key="sports" pageSize={pageSize} Headline="Sports Top Headlines - India" category="sports"/>} />
          <Route path="technology/*"  element={<News key="technology" pageSize={pageSize} Headline="Technology Top Headlines - India" category="technology"/>} />
        </Routes>
        </Router>
        </NewsState>
        

        {/* <Footer/> */}
      </>
    );
  
}
