const movies = [

    {
        title: "Inception",
        year: 2010,
        genre: "sci-fi",
        rating: 8.8,
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description:
            "A skilled thief enters the dreams of others to steal secrets."
    },

    {
        title: "Interstellar",
        year: 2014,
        genre: "sci-fi",
        rating: 8.7,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "Explorers travel through a wormhole in search of a new home for humanity."
    },

    {
        title: "The Dark Knight",
        year: 2008,
        genre: "action",
        rating: 9.0,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description:
            "Batman faces a criminal mastermind who creates chaos in Gotham."
    },

    {
        title: "Avengers: Endgame",
        year: 2019,
        genre: "action",
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description:
            "The Avengers attempt to reverse the devastating events of the past."
    },

    {
        title: "The Hangover",
        year: 2009,
        genre: "comedy",
        rating: 7.7,
        image: "https://image.tmdb.org/t/p/w500/A7xE3WQ0M6nJf0Lx5X1M4fZ9v9p.jpg",
        description:
            "A group of friends wake up after a wild night with no memory of what happened."
    },

    {
        title: "The Pursuit of Happyness",
        year: 2006,
        genre: "drama",
        rating: 8.0,
        image: "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9pFhM2Yx8j3y.jpg",
        description:
            "A struggling father works hard to build a better life for his son."
    }

];


const movieContainer =
    document.getElementById("movieContainer");


function displayMovies(movieList) {

    movieContainer.innerHTML = "";


    if (movieList.length === 0) {

        movieContainer.innerHTML = `
            <h3>No movies found.</h3>
        `;

        return;
    }


    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("movie-card");


        card.innerHTML = `

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <div class="movie-meta">

                    <span>${movie.year}</span>

                    <span class="rating">
                        ⭐ ${movie.rating}
                    </span>

                </div>

                <p>
                    ${movie.description}
                </p>

            </div>

        `;


        movieContainer.appendChild(card);

    });

}


function searchMovies() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filteredMovies =
        movies.filter(movie =>
            movie.title
                .toLowerCase()
                .includes(searchText)
        );


    displayMovies(filteredMovies);

}


function filterMovies() {

    const genre =
        document
            .getElementById("genreFilter")
            .value;


    if (genre === "all") {

        displayMovies(movies);

        return;
    }


    const filteredMovies =
        movies.filter(movie =>
            movie.genre === genre
        );


    displayMovies(filteredMovies);

}


/* Search when pressing Enter */

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchMovies();

        }

    });


/* Display movies when page loads */

displayMovies(movies);