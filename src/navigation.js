const homepage = function () {
    console.log('home')
    getTrending();
    getCategoriesMovie();
};
const categorypage = function () {
    console.log('category')
}
const trendspage = function () {
    console.log('trend')
}
const searchpage = function () {
    console.log('seacrh')
}
const moviepage = function () {
    console.log('movie')
}
const navigation = function (){
    console.log({location})
    if (location.hash.startsWith('#trends')) {
        trendspage()
    }else if (location.hash.startsWith('#search=')) {
        searchpage()
    }else if (location.hash.startsWith('#movie=')) {
        moviepage()
    }else if (location.hash.startsWith('#category=')) {
            categorypage()}
    else{
        homepage()
    }
};

window.addEventListener('DOMContentLoaded', navigation, false)
window.addEventListener('hashchange', navigation, false)