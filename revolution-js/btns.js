// buttonFunctionality
export function buttonPromotion(promo1, promo2, promo3)
{
    const d = document,
        $form1 = d.querySelector('#promotionBForm'),
        $form2 = d.querySelector('#promotionFForm'),
        $form3 = d.querySelector('#promotionPForm')

    d.addEventListener('click', e =>{

        if(e.target.matches(promo1)){

            $form1.classList.toggle('none')
            $form2.classList.add('none')
            $form3.classList.add('none')

        }

        if(e.target.matches(promo2)){

            $form2.classList.toggle('none')
            $form1.classList.add('none')
            $form3.classList.add('none')

        }

        if(e.target.matches(promo3)){

            $form3.classList.toggle('none')
            $form2.classList.add('none')
            $form1.classList.add('none')

        }

    })
        
}