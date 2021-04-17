const d = document

export function masPalabrasPG (){

    let $btnJuego = d.querySelector('#juego1'),
        $formJuego1 = d.querySelector('.modal-juego1'),
        $closeform1 = d.querySelector('.close-juego1')
    d.addEventListener('click', (e)=>{

        if(e.target.matches('#juego1')){
            $formJuego1.classList.toggle('none')
        }

        if(e.target.matches('.close-juego1')){
            $formJuego1.classList.toggle('none')
        }

    })


}