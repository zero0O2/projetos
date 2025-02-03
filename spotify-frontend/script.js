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
const resultartists = document.getElementById('artists')

searchInput.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase()
    if(searchTerm === ''){
        resultPlaylist.classList.remove('hidden')
        resultartists.classList.add('hidden')
    } else {
        resultPlaylist.classList.add('hidden')
        resultartists.classList.remove('hidden')

        resultartists.innerHTML = searchInput.value

    }
})