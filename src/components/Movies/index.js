import { Route } from 'react-router-dom'
import MovieDetails from '../MovieDetails';
import { NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function Movies(props) {
  const movies = props.movies;
  //console.log(movies);
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav className='comp nav'>
        <ul>
          {movies.map(item => {
            const { id, title, description } = item;
            const url = '/movies/' + id;
            return <li key={id}>
              <NavLink
                activeClassName='purple'
                activeStyle={{ fontWeight: 'bold' }}
                to={url}>
                {title}</NavLink>
            </li>;
          })}
        </ul>
      </nav>
      <Switch>
        <Route path='/movies/:movieId'>
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div >
  );
}

export default Movies;