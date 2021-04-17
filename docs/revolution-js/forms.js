export function promotionalForm (category,promotionForm, nameItem, idItem, closeForm)

{
    const d = document,
        $academy = d.getElementById('academia'),
        $dniS = d.getElementById('idStudent'),
        $nameS = d.getElementById('nameS'),
        $nameItem = d.getElementById(nameItem),
        $dniItem = d.getElementById(idItem),
        $form = d.getElementById(promotionForm);

    // firebase.database()
    d.addEventListener('click', e=>{
        
        if(e.target.matches(closeForm))
        {
            e.preventDefault();
            $form.classList.toggle('none')
        }
    }) 
    function dataForm(e)
    {
        e.preventDefault();
            
            let $data = {
                'academy': $academy.value,
                'name_sudent': $nameS.value,
                'dni_student': $dniS.value,
                'name_item': $nameItem.value,
                'dni_item': $dniItem.value
            }
              
        const ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;

        if(ex_regular_dni.test ($dniS.value) == true && ex_regular_dni.test ($dniItem.value) == true )
        {                 
            function saveDataForm($data)
            {   
                firebase.database().ref(category).push($data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
                .then(function(){
                console.log('mensaje guardado') // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
                })
                .catch(function(){
                console.log('mensaje No guardado') // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
                })
            }

            saveDataForm($data)
            $form.reset()
            $form.classList.toggle('none')
            d.getElementById('spanS').classList.add('none')
            d.getElementById('idStudent').style.setProperty('border','solid 0px #fff')
            d.getElementById(idItem).style.setProperty('border',' solid 0px #fff')
            d.getElementById('spanB').classList.add('none')
        }else{
            if(ex_regular_dni.test ($dniS.value) != true){
                d.getElementById('idStudent').style.setProperty('border',' solid 2px #f3357a')
                d.getElementById('spanS').classList.remove('none')
            }
            if(ex_regular_dni.test ($dniItem.value) != true){
                d.getElementById(idItem).style.setProperty('border',' solid 2px #f3357a')
                d.getElementById('spanB').classList.remove('none')
            }
            console.log('NO se enviaron los DATOS');
        }
    }

    if($form)
    {
        $form.addEventListener('submit', dataForm)
    }

}



