import React, { Component } from "react";

class Galleria2 extends Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const api = "http://www.omdbapi.com/?apikey=c1fdb0be&s=star+wars";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    console.log(data);
    return (
      <div>
        {loading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {data && (
          <div class="carousel-container">
            {data.Search.map((item) => (
              <div class="carousel-slide" key={item.imdbID}>
                <img src={item.Poster} alt={item.Title} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Galleria2;
