const d = document

export function masPalabrasPG (){

    let $btnJuego = d.querySelector('#juego1'),
        $formJuego1 = d.querySelector('.modal-juego1'),
        $closeform1 = d.querySelector('.close-juego1'),
        $btnPlay = d.querySelector('.btn-juego1'),
        $descriptionGame = d.querySelector('.head-games'),
        $formPlayOne = d.getElementById('form-play1'),
        $headerPlay = d.querySelector('.juego'),
        $listOption = d.getElementById('list'),
        $cortina = d.querySelector('.background-dark')
    
    d.addEventListener('click', (e)=>{
        
        if(e.target.matches('#juego1')){
            $formJuego1.classList.toggle('none')
        }

        if(e.target.matches('.close-juego1')){
            $formJuego1.classList.toggle('none')
        }

        if(e.target.matches('.btn-juego1')){
            $descriptionGame.classList.add('none')
            let playerOne = d.getElementById('jugador1').value
            let playerTwo = d.getElementById('jugador2').value
            let playerThree = d.getElementById('jugador3').value
            let playerFour = d.getElementById('jugador4').value
            
            $listOption.insertAdjacentHTML("beforebegin",`<p id="turn"></p>`)
            
            d.getElementById('turn').textContent = `Es tu turno ${playerOne}`
            $formPlayOne.classList.add('animation-close-der-izq')
            $formPlayOne.style.setProperty('transform','translateX(-180%)')

        } 

        let palabras =['.play1','.play2','.play3','.play4','.play5','.play6','.play7','.play8','.play9','.play10','.play11','.play12']
        palabras.forEach(el => {
            if(e.target.matches(el)){
                d.querySelector(el).style.setProperty('background','transparent')
            }
        });
        
        
    })

    
}