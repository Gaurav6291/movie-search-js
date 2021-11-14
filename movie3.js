async function getMovie(){
    let movie = document.getElementById('movie').value
    try{
    let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=cc2ea49f`)
    let res = await response.json();
    showMovie(res)
    console.log('res:',res);
    }
    catch(e){
        console.log('e:',e)
        
    }
}
//getMovie();

let container = document.getElementById('container')

function showMovie(d){
    container.innerText = "";
    let div = document.createElement('div')
    div.setAttribute('class','main')
    let div2 = document.createElement('div2')
    div2.setAttribute('class','main2')

    
    let title = document.createElement('p')
    title.innerText = `TITLE-${d.Title}`

    if(d.Title!= undefined){
    let released = document.createElement('p')
    released.innerText = `REALESED-${d.Released}`
    let imdbRating = document.createElement('p')
    imdbRating.innerText = `RATING-${d.imdbRating}`
    // console.log(typeof(8.5))

    if(d.imdbRating>8.5){
       
        let recommend = document.createElement('h3');
        recommend.innerText = "RECOMMENDED"
        div.append(recommend);
    }
    // let Runtime = document.createElement('p')
    // Runtime.innerText = `RUNTIME-${d.Runtime}`
    let Actors = document.createElement('p')
    Actors.innerText = `Actors-${d.Actors}`
    //  let Director = document.createElement('p')
    //  Director.innerText = `Director-${d.Director}`
    let Poster = document.createElement('img')
    Poster.src = `${d.Poster}`
    div.append(title, released, imdbRating, Actors)
    div2.append(Poster)
    container.append(div)
    container.append(div2);
    }
    else{
        let gif = document.createElement('img')
        gif.setAttribute("id",'gif')
        gif.src = "https://media.tenor.com/images/b276eb1262c2ae17a7d94929051d7a9d/tenor.gif"
        div.append(gif)
        container.append(div)   
    }
}

