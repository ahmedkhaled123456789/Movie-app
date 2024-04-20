import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./CardDetails.scss";
import CircleRating from "../../components/circleRating/CircleRating";
import axios from "axios";
import { PlayIcon } from "../../components/Playbtn";
import VideoPopup from "../../components/videoPopup/VideoPopup";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  //get  movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Container className="movies_details">

      <Row className="justify-content-center">
        <Col lg="4" md="4" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie  "
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ascad"
            />
          </div>
        </Col>
        <Col lg="8" md="8" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex  p-4 ">
            <div className="justify-content-center    ">
              <p className="card-text-details  ">Name Movie: {movie.title}</p>
              <p className="card-text-details  date ">
                Movie Date :{movie.release_date}
              </p>
              <div className="icons  d-flex gap-4">
                <CircleRating rating={movie?.vote_average} />
                <div
                  className="playbtn"
                  onClick={() => {
                    setShow(true);
                    setVideoId(movie?.results?.[0].key);
                  }}
                >
                  <PlayIcon />
                  <span className="text">Watch Trailer</span>
                </div>
              </div>

              <div className="overview">
                <div className="heading">Overview</div>
                <div className="description">{movie.overview}</div>
              </div>

              <div className="info">
                {movie.status && (
                  <div className="infoItem">
                    <span className="text text-white bold">Status: </span>
                    <span className="text text-white">{movie.status}</span>
                  </div>
                )}
                {movie.release_date && (
                  <div className="infoItem">
                    <span className="text text-white bold">Release Date: </span>
                    <span className="text text-white">
                      {movie.release_date}
                    </span>
                  </div>
                )}
                {movie.runtime && (
                  <div className="infoItem">
                    <span className="text text-white bold">Runtime: </span>
                    <span className="text text-white">{movie.runtime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
      <Row className="justify-content-center mt-4">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
      </Container>
     
    </div>
  );
};

export default MovieDetails;
