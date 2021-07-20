const apikey = "b9703965723459d9832c203fe2102d28"
const imagePath = "http://image.tmdb.org/t/p/w1280"
const mainContainer = document.getElementById('main');
const movieName = document.getElementById('movie_search');
const form = document.getElementById('search_bar')
const section = document.getElementById('section')

async function getPopularMovies(apikey) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    const response = await fetch(url);
    const respdata = await response.json()
    console.log(respdata)
    updateMovies(respdata)
}

function updateMovies(respdata) {
    respdata.results.forEach(mv => {
        const container = document.createElement('div')
        const img = document.createElement('img');
        const infobox = document.createElement('div');
        const info_title = document.createElement('h3');
        const info_vote = document.createElement('span');
        container.classList.add('movie');
        if(mv.poster_path != null) {
            img.setAttribute("src",imagePath+mv.poster_path);
            container.appendChild(img);
            
            infobox.classList.add('movie_info');
            info_title.innerText = `
                ${mv.original_title}
            `
            info_vote.innerText = `
                ${mv.vote_average}
            `
            infobox.appendChild(info_title);
            infobox.appendChild(info_vote);
            container.appendChild(infobox);
            mainContainer.appendChild(container);
        } else {
            container.remove();
            img.remove();
            infobox.remove();
            info_title.remove();
            info_vote.remove();
        }
    });
}

getPopularMovies(apikey)

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    // console.log(movieName.value);
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=b9703965723459d9832c203fe2102d28&query=${movieName.value}`
    findAndDisplayMovie(searchURL,movieName) 
    movieName.value = ''
})

async function findAndDisplayMovie(text,name) {
    const response2 = await fetch(text);
    const respData2 = await response2.json();
    console.log(respData2.results)

    if(respData2.results) {
        respData2.results.forEach(mv => {
            const container = document.createElement('div')
            const img = document.createElement('img');
            const infobox = document.createElement('div');
            const info_title = document.createElement('h3');
            const info_vote = document.createElement('span');
            container.classList.add('movie');
            if(mv.poster_path != null) {
                img.setAttribute("src",imagePath+ mv.poster_path);
                container.appendChild(img);
                
                infobox.classList.add('movie_info');
                info_title.innerText = `
                    ${mv.original_title}
                `
                info_vote.innerText = `
                    ${mv.vote_average}
                `
                section.style.padding = "30px";
                section.style.borderBottom = "1px solid white";
                infobox.appendChild(info_title);
                infobox.appendChild(info_vote);
                container.appendChild(infobox);
                section.appendChild(container);
            } else {
                container.remove();
                img.remove();
                infobox.remove();
                info_title.remove();
                info_vote.remove();
            }
        });        
    } else {
        if(name) {
            alert("Movie not Found")
        } else {
            alert("Please enter a valid Name")
        }
    }
}