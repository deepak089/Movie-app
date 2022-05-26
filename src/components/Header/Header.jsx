import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {Link } from 'react-router-dom';
import user from "../../images/user.png";
import { fetchAsyncMovies, fetchAsyncselectMovieOrShow } from '../../reducers/movies/movieSlice';
import './Header.css';

const Header = () => {
  const [Term, setTerm] = useState('');
  const dispatch=useDispatch();
  const submitHandler= (e)=>
  {
   e.preventDefault();
   dispatch(fetchAsyncMovies(Term));
   dispatch(fetchAsyncselectMovieOrShow(Term));

  }
    return (
    <>
    <div className="header">
        <div className="logo">Movie App
      <Link to="/"> </Link>
      </div>
      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input type="text" className='form-control mx-3 col-lg-12' value={Term} onChange={(e)=>setTerm(e.target.value)}name="" placeholder='Enter movie name' id="" />
          <button className="btn btn-success ">Search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user"/>
      </div>
    </div>
    </>
  )
}

export default Header