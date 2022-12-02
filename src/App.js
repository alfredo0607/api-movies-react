import { useEffect, useState } from "react";
import "./App.css";
import CardMovies from "./component/CardMovies";
import Paginations from "./component/Paginations";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81a950c980fc1ddaf786565707f64517&page=${page}`;
      const respuesta = await fetch(url);
      const movies = await respuesta.json();
      setMovies(movies.results);
      setpage(movies.page);
    };
    consultarApi();
  }, [page]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 id="container" style={{ color: "red" }}>
            Pagina # {page}
          </h1>
        </div>

        <div>
          <Paginations setpage={setpage} page={page} />
        </div>
      </div>

      <div className="container">
        {movies.length !== 0 &&
          movies.map((data) => (
            <div>
              <CardMovies key={data.id} data={data} />
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
