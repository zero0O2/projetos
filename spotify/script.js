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
const artistsPlay = document.getElementById('artistsPlay')
const playlistSection = document.getElementById('playlistSection')
const headerNavigation = document.getElementById('headerNavigation')
const footer = document.querySelector('.footer')

const api = `api-artists/artists.json`;




function seguirButton(buttonSeguir){
    if(!window.localStorage.getItem('artist')){
        window.localStorage.setItem('artist','Seguir')
        buttonSeguir.innerHTML = window.localStorage.getItem('artist')
    }else{
        buttonSeguir.innerHTML = window.localStorage.getItem('artist')
    }
    buttonSeguir.addEventListener('click' , function(){
        if(buttonSeguir.textContent == 'Seguir'){
            buttonSeguir.innerHTML = 'Seguindo'
            window.localStorage.setItem('artist','Seguindo')
        } else {
            buttonSeguir.innerHTML = 'Seguir'
            window.localStorage.setItem('artist','Seguir')
        }
    })
}

//                          Funções     




function artistsForEach(artistsCard,play,nome,api,){
    
    artistsCard.forEach((element,index)=>{
        // ANIMAÇÃO
        
        element.addEventListener('mouseover',function(){
            play[index].classList.remove('hidden')
        })
        element.addEventListener('mouseout',function(){
            play[index].classList.add('hidden')
        })
        
        // DISPLAY DE ARTISTA
        element.addEventListener('click',function(){
            resultArtists.classList.add('hidden')
            footer.classList.add('hidden')
            artistsPlay.classList.remove('hidden')
            
            searchInput.value = ''
            artistsPlay.innerHTML = `
            <div class='artistAside' id='background'>
            <span class="title" id="titleArtist">${nome[index].textContent}</span>
                </div>
                <div class="artistMusic">
                <div>
                <button class="fa-solid fa-play"></button>
                <button id="seguir"></button>
                <button id="mais">
                <p>. . .</p>
                </button>
                </div>
                </div>`
                
                    let buttonSeguir = document.getElementById('seguir')
                    seguirButton(buttonSeguir)
                    let background = document.getElementById('background')
                    background.style.backgroundImage = `none`
                    background.style.backgroundImage = `url('${api[index].banner}')`
                })
            })
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
                    
                    resultArtists.innerHTML += `
                    <a class="artistsCard" id="artistsCard-${index}">
                    <img class="artistsFoto" id="artistsFoto" src="${element.urlImg}">
                    <span class="hidden play" id="play-${index}">
                    <i class="fa-solid fa-play"></i>
                    </span>
                    <div class="artistsContent">
                    <span class="artistsName" id="name-${index}">${element.name}</span>
                    <span class="indentifier" id="indentifier">${element.genre}</span>
                    </div>
                    </a>`
                    
                    const artistsCard = document.querySelectorAll(`.artistsCard`)
                    
                    if(filter.indexOf(string) == -1){
                        artistsCard[index].classList.add('hidden')
                    }
                    
                    const play = document.querySelectorAll('.play')
                    const nome = document.querySelectorAll('.artistsName')
                    
                    artistsForEach(artistsCard,play,nome,api)
                    
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
                artistsPlay.classList.add('hidden')
                divArtists.classList.remove('hidden')
                resultArtists.classList.remove('hidden')
                footer.classList.remove('hidden')
                
            }
            artistsDisplay(resultArtists ,searchTerm)
        })
        
        