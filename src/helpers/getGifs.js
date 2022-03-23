const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cqxIm7sXLgea8qrHdfn5KN47kcuEXpML&q=${encodeURI(category)}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(i => {
        return {
            id: i.id,
            title: i.title,
            url: i.images?.downsized_medium.url
        }
    })
    return gifs
}

export default getGifs