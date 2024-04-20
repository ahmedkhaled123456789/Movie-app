import React, { useState, useEffect } from "react";
  import "./style.scss";
import { Row } from "react-bootstrap";
import { getAllMovie, getMovieSearch } from "../../redux/actions/movieAction";
import { useDispatch } from "react-redux";

 
 
const HeroBanner = () => {
     const [query, setQuery] = useState("");
      

     const onSearch = () => {
      search(query);
    };
    const dispatch = useDispatch();
    //to search in api
    const search = async (word) => {
      if (word === "") {
        dispatch(getAllMovie());
      } else {
        dispatch(getMovieSearch(word));
      }
    };

    return (
        <div className="heroBanner container">
            
            <div className="opacity-layer"></div>
                 <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <Row>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={onSearch}                         />
                        <button>Search</button>
                    </div>
                    </Row>
                   
                </div>
         </div>
    );
};

export default HeroBanner;
