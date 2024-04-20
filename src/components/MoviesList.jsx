import React, { useEffect, useState } from "react";
import { Row, Card, Col, Container } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMovie } from '../redux/actions/movieAction'
 
const MoviesList = () => {

  const [movies, setMovies] = useState([])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie())
  }, [])

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])


  return (<>
 <Container>
 <Row className="movies_list">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}
<Col lg="12" >
{movies.length >= 1 ? (<PaginationComponent />) : null}

</Col>

    </Row>
 </Container>

  </>
   
  );
};

export default MoviesList;
