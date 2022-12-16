import {
  Button,
  CircularProgress,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import HomeCard from "./HomeCard";
import { API_KEY } from "../Api";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingTop: "2rem",
    "& .MuiInputBase-root": {
      width: "40%",
      background: "#dfebed",
      border: "2px solid #a7b8d1",
      height: "2.5rem",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem",
    },
    "& .MuiSvgIcon-root": {
      opacity: "0.6",
    },
    "& .MuiButton-root": {
      background: "#cedbf0",
    },
  },
  btn: {
    height: "2.5rem",
    background: "#516875",
  },
  typ: {
    paddingBottom: "2rem",
  },
});

const Home = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [values, setValues] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  
  // const fetchData = (input)=>{
  //    fetch(`https://serpapi.com/search.json?q=${input}&location=India&api_key=ac1a3426e5b0e2a5c75d216f676c5230f81c33ceb62bf46d1756d0e93c634a15`, requestOptions)
  //   .then(response => response.json())
  //   .then(result => {setValues(result.data.organic_results) 
  //   console.log(result)
  //   })
  //   .catch(error => setError(error.message));
  // }

  const fetchData = (input) => {
    var config = {
      method: 'get',
      url: `https://serpapi.com/search.json?q=${input}&tbm=nws&location=Dallas&api_key=141607da42245d563e0431de5f40153f797f1118472ca5619c4638b2ef8a07a3`,
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    console.log('hello')
      // const URL = `https://serpapi.com/search.json?q=${input}&location=India&api_key=${API_KEY}`;
      axios(config)
      .then(function (response) {
        setValues(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        setError(error.message)
        setLoading(false
          )
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData(input);
  };

  const getContent = () => {
    if (loading) {
      return <CircularProgress style={{marginTop:'4rem'}} color="inherit" />;
    } else {
      return error ? (
        <Typography
          variant="h4"
          color="secondary"
          style={{ marginTop: "4rem" }}
        >
          {error}
        </Typography>
      ) : (
        <HomeCard values={values} />
      );
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.typ}>
            Search
          </Typography>
          <InputBase
            onChange={(e) => setInput(e.target.value)}
            placeholder="search any topic..."
            startAdornment={<SearchIcon />}
            endAdornment={
              <Button type="submit" className={classes.btn}>
                Search
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12}>
          {getContent()}
        </Grid>
      </Grid>
    </form>
  );
};

export default Home;
