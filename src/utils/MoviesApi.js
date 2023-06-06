export const getContent = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => {
            console.log(err);
        });
}
