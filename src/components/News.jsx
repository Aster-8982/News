import { CircularProgress, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import MediaCard from "./MediaCard";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


// var config = {
//   method: 'get',
//   url: 'https://serpapi.com/search.json?q=Trump&tbm=nws&location=Dallas&api_key=141607da42245d563e0431de5f40153f797f1118472ca5619c4638b2ef8a07a3',
//   headers: { }
// };
  
  const fetchNews = async () => {
    try {
      const URL = `https://serpapi.com/search.json?q=news&tbm=nws&location=India&api_key=${API_KEY}`;
      const res = await axios(URL);
      const data = res.data.news_results;
      setNews(data);
      setLoading(false)
    } catch (error) {
      setError(error.message);
      setLoading(false)
    }
  };

  useEffect(() => {
   setLoading(true)
    fetchNews();
  }, []);

  const getContent = () => {
    if (loading) {
      return <CircularProgress style={{marginTop:'4rem', paddingLeft:'30vw'}} color="inherit" />;
    } else {
      return error ? (
        <Typography
          variant="h4"
          color="secondary"
          style={{ marginTop: "4rem", paddingLeft:'30vw'}}
        >
          {error}
        </Typography>
      ) : (
        <MediaCard data={news} />
      );
    }
  };

  return (
    <div>
      {getContent()}
    </div>
  );
};

export default News;
