import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

    state = {
        movies : getMovies()
    }

    handleDelete = movie =>{
        // console.log(movie)

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }


    render() { 

        const {length : count} = this.state.movies;

        if(count=== 0) 
        return <h4>There is no movies in the database</h4>;

        return(
           <div className="m-2">
                <h3>Showing {count} movies from database.</h3>
           <table className="table table-bordered">
            <thead>
                 <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Delete</th>
                 </tr>
            </thead>

            <tbody>
                { this.state.movies.map(movie => (
                    <tr key={movie}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                       
                    </tr>

                ))}
                
            </tbody>
        </table>
           </div>
        );

    }
}
 
export default Movies;