let msg = document.getElementById("boahora")
let horaAtual = new Date().getHours()
msg.innerHTML = "Oi, como vai você"


if(horaAtual <=5){
    msg.innerHTML = "Boa madrugada"
} else if (horaAtual <= 11){
    msg.innerHTML = "Bom dia"
} else if (horaAtual <= 17){
    msg.innerHTML = "Boa tarde"
} else {
    msg.innerHTML = "Boa noite"
}

/* --------------------------------------------- */

const searchInput = document.getElementById('searchInput')
const resultPlaylist = document.getElementById('result')
const divArtists = document.getElementById('artists')
const resultArtists = document.getElementById('artistsSection')
const playlistSection = document.getElementById('playlistSection')

const api = `api-artists/artists.json`;

// function animationPlay(){
//     const artistsCard = document.querySelectorAll('.artistsCard')
//     artistsCard.forEach((element,index) => {
//         const play = document.getElementById(`play-${index}`)
//         element.addEventListener('mouseover',function(){
//             play.classList.remove('hidden')
//         })
//         element.addEventListener('mouseout',function(){
//             play.classList.add('hidden')
//         })
//     })
// }

// function displayArtists(api , resultArtists, searchTerm){

//     api.forEach((element) => {
//         let filter = element.name.toLowerCase()
//         if(filter == searchTerm){
            
            
//         }else{
//             console.log('error')
//         }

//             // resultArtists.innerHTML += `
//             // <a href="" class="artistsCard" id="artistsCard-${index}">
//             //     <img class="artistsFoto" id="artistsFoto" src="${element.urlImg}">
//             //     <span class="hidden play" id="play-${index}">
//             //        <div class="fa solid fa-play"></div>
//             //     </span>
//             //     <div class="artistsContent">
//             //         <span class="artistsName" id="name">${element.name}</span>
//             //         <span class="indentifier" id="indentifier">${element.genre}</span>
//             //     </div>
//             // </a>`
//     })
// }

function Api(resultArtists , searchTerm){
    resultArtists.innerHTML = ''
    fetch(api)
        .then((response) => response.json())
        .then((result) => result.artists)
        .then((api) => {
            
            api.forEach((element) => {
                let filter = element.name.toLowerCase()
                if(filter == searchTerm){

                    resultArtists.innerHTML = `
                    <a href="" class="artistsCard" id="artistsCard">
                        <img class="artistsFoto" id="artistsFoto" src="${element.urlImg}">
                        <span class="hidden play" id="play">
                           <div class="fa solid fa-play"></div>
                        </span>
                        <div class="artistsContent">
                            <span class="artistsName" id="name">${element.name}</span>
                            <span class="indentifier" id="indentifier">${element.genre}</span>
                        </div>
                    </a>`                    
                }
            })

            const artistsCard = document.getElementById(`artistsCard`)
            artistsCard.addEventListener('mouseover',function(){
                play.classList.remove('hidden')
            })
            artistsCard.addEventListener('mouseout',function(){
                 play.classList.add('hidden')
            })

        });
}


document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase()  
    if(searchTerm === ''){
        resultPlaylist.classList.remove('hidden')
        divArtists.classList.add('hidden')
    } else {
        resultPlaylist.classList.add('hidden')
        divArtists.classList.remove('hidden')
    }
    Api(resultArtists ,searchTerm)
})

