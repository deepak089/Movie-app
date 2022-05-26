import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/Movieapis";
import { APIKEY } from "../../common/apis/MovieapiKey";

export const  fetchAsyncMovies =createAsyncThunk('movies/fetchAsyncMovies',async (term) =>{
      // const movietext='harry';
     const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=movie`);
       
       return  response.data ; 
     
})
export const  fetchAsyncShows =createAsyncThunk('movies/fetchAsyncShows',async (term) =>{
      // const movietext='harry';
     const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=series`);
       
       return  response.data ; 
     
})
export const  fetchAsyncselectMovieOrShow =createAsyncThunk('movies/fetchAsyncselectMovieOrShow',async (id) =>{
      const movietext='harry';
     const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`);
       
       return  response.data ; 
     
})
const initialState = {
  movies: [],
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeAllselectMovieOrShow:(state)=>{
      state.selectMovieOrShow={}
    }
  },
  extraReducers:{
      [fetchAsyncMovies.pending]:()=>{
          console.log("pending");
      },
            [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
          console.log("fetched successfully");
          return { ...state ,movies: payload} ;
      },
            [fetchAsyncMovies.rejected]:()=>{
          console.log("failed");
      },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
          console.log("fetched successfully");
          return { ...state ,shows: payload} ;
      },
      
        [fetchAsyncselectMovieOrShow.fulfilled]:(state,{payload})=>{
          console.log("fetched successfully");
          return { ...state ,selectMovieOrShow: payload} ;
      },
  }
 
});

export const {removeAllselectMovieOrShow} =movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getAllselectMovieOrShow=(state)=>state.movies.selectMovieOrShow;


export default movieSlice.reducer;