class Api {
    constructor(host) {
        this._host = host;
        this._getJsonOrError = this._getJsonOrError.bind(this);
        this._getHeaders = this._getHeaders.bind(this);
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Ошибка при загрузке данных");
    }

    _getHeaders(token) {
        return {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
        };
    }

    getInfo(token) {
        return fetch(`${this._host}/users/me`, {
            headers: this._getHeaders(token),
        }).then(this._getJsonOrError);
    }

    getInfoMovies(token) {
        return fetch(`${this._host}/movies`, {
            headers: this._getHeaders(token),
        }).then(this._getJsonOrError);
    }



    createMovie(movie, token) {
        return fetch(`${this._host}/movies`, {
            method: "POST",
            headers: this._getHeaders(token),
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: movie.trailerLink,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        }).then(this._getJsonOrError);
    }

    deleteMovie(id, token) {
        return fetch(`${this._host}/movies/${id}`, {
            method: "DELETE",
            headers: this._getHeaders(token),
        }).then(this._getJsonOrError);
    }

    signup(password, email, name) {
        return fetch(`${this._host}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, email, name })

        })
            .then((response) => {
                try {
                    if (response.status === 201 || 200) {
                        return response.json();
                    }
                } catch (e) {
                    return (e)
                }
            })
            .then((res) => {
                return res;
            })
            .catch((err) => console.log(err));
    };

    signin(password, email) {
        return fetch(`${this._host}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, email })

        })
            .then((response) => {
                try {
                    if (response.status === 201 || 200) {
                        return response.json();
                    }
                } catch (e) {
                    return (e)
                }
            })
            .then((res) => {
                return res;
            })
            .catch((err) => console.log(err));
    };


    editProfile(name, email, token) {
        return fetch(`${this._host}/users/me`, {
            method: "PATCH",
            headers: this._getHeaders(token),
            body: JSON.stringify({ name, email }),
        })
            .then(this._getJsonOrError)
            .then((result) => {
                return result;
            });
    }

}
const mainApi = new Api(
    "https://moviebackend.ml",
);
export default mainApi;