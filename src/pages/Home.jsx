import React from 'react'
import HeroBanner from '../components/heroBanner/HeroBanner';
import MoviesList from "../components/MoviesList";
import { Container } from "react-bootstrap";

function Home() {
  return (<>
   <Container>
   <HeroBanner/>
  <MoviesList/>
   </Container>
  
  </>
     
  )
}

export default Home