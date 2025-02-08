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

/* -------------------  Artists Display  -------------------------- */

const searchInput = document.getElementById('searchInput')
const resultPlaylist = document.getElementById('result')
const divArtists = document.getElementById('artists')
const resultArtists = document.getElementById('artistsSection')
const playlistSection = document.getElementById('playlistSection')

const api = `api-artists/artists.json`;

//                          Funções     

function animationPlay(artistsCard,play){
    artistsCard.forEach((element,index)=>{
        element.addEventListener('mouseover',function(){
            play[index].classList.remove('hidden')
        })
        element.addEventListener('mouseout',function(){
            play[index].classList.add('hidden')
        })
    })
}

function artistsPage(name){
    console.log(name)
}


function artistsDisplay(resultArtists , searchTerm){
    resultArtists.innerHTML = ''
    fetch(api)
        .then((response) => response.json())
        .then((result) => result.artists)
        .then((api) => {
            api.forEach((element,index) => {
                let filter = element.name.toLowerCase()
                let string = searchTerm
                let name = element.name
                if(filter.indexOf(string) != -1){

                    resultArtists.innerHTML += `
                    <a href="" class="artistsCard" id="artistsCard-${index}">
                        <img class="artistsFoto" id="artistsFoto" src="${element.urlImg}">
                        <span class="hidden play" id="play-${index}">
                           <i class="fa-solid fa-play"></i>
                        </span>
                        <div class="artistsContent">
                            <span class="artistsName" id="name-${index}">${element.name}</span>
                            <span class="indentifier" id="indentifier">${element.genre}</span>
                        </div>
                    </a>`                    
                }
            })

            const artistsCard = document.querySelectorAll(`.artistsCard`)
            const play = document.querySelectorAll('.play')
            const name = document.querySelectorAll('.artistsName')

            animationPlay(artistsCard,play)

            artistsCard.forEach((element,index) => {
                element.addEventListener('click',function(){
                    console.log(name[index].textContent)
                })
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
    artistsDisplay(resultArtists ,searchTerm)
})

