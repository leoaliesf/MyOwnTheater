

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'application/json;charset:utf-8',
    },
    params:{
        'api_key' : apiKey,
    },
});

const getTrending = async function () {
    const {data} = await api('trending/movie/day');
    const movies = data.results;

        movies.forEach(movie=> {
            const trendingPreviewC = document.querySelector('#trendingPreview .trendingPreview-movieList')
            const movieContainer = document.createElement('div');
             movieContainer.classList.add('movie-container');
    
            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ movie.poster_path)    
    
            movieContainer.appendChild(movieImg);
            trendingPreviewC.appendChild(movieContainer);
            
        });
}
const getCategoriesMovie = async function(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;

    categories.forEach(category=> {
                const categoriesPreviewC = document.querySelector('#categoriesPreview .categoriesPreview-list')
                 const categoryContainer = document.createElement('div');
                 categoryContainer.classList.add('category-container');
        
                 const categoryTittle = document.createElement('h3');
                 categoryTittle.classList.add('category-title');
                 categoryTittle.setAttribute('id', 'id'+ category.id);
                 const categoryTittleText = document.createTextNode(category.name)  
        
                 categoryTittle.appendChild(categoryTittleText);
                 categoryContainer.appendChild(categoryTittle);
                 categoriesPreviewC.appendChild(categoryContainer);
        
             });
}

// USANDO FETCH
// const getTrending = async function () {
//     const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+ apiKey)
//     const data = await res.json();
//     const movies = data.results;
//     movies.forEach(movie=> {
//         const trendingPreviewC = document.querySelector('#trendingPreview .trendingPreview-movieList')
//         const movieContainer = document.createElement('div');
//         movieContainer.classList.add('movie-container');

//         const movieImg = document.createElement('img');
//         movieImg.classList.add('movie-img');
//         movieImg.setAttribute('alt', movie.title);
//         movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ movie.poster_path)    

//         movieContainer.appendChild(movieImg);
//         trendingPreviewC.appendChild(movieContainer);

//     });
// }
// const getCategoriesMovie = async function () {
//     const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+ apiKey)
//     const data = await res.json();
//     const categories = data.genres;
//     categories.forEach(category=> {
//         const categoriesPreviewC = document.querySelector('#categoriesPreview .categoriesPreview-list')
//         const categoryContainer = document.createElement('div');
//         categoryContainer.classList.add('category-container');

//         const categoryTittle = document.createElement('h3');
//         categoryTittle.classList.add('category-title');
//         categoryTittle.setAttribute('id', 'id'+ category.id);
//         const categoryTittleText = document.createTextNode(category.name)  

//         categoryTittle.appendChild(categoryTittleText);
//         categoryContainer.appendChild(categoryTittle);
//         categoriesPreviewC.appendChild(categoryContainer);

//     });
// }
getTrending();
getCategoriesMovie();