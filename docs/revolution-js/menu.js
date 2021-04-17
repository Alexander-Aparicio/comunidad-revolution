export function mobileNavigation (openMenu, closeMenu, mobilMenu , btnOpen, btnClose){
    const d = document,
        $openMenu = d.querySelector(openMenu),
        $closeMenu = d.querySelector(closeMenu),
        $menuMovil = d.querySelector(mobilMenu);
    
    d.addEventListener('click', (e)=> {
        if(e.target.matches(btnOpen)){
            $openMenu.classList.toggle('none');
            $closeMenu.classList.toggle('none');
            $menuMovil.classList.toggle('hidden');
            $menuMovil.classList.toggle('animation-open-izq-der');
            $menuMovil.classList.remove('animation-close-der-izq');
        }
        if(e.target.matches(btnClose)){
            $openMenu.classList.toggle('none');
            $closeMenu.classList.toggle('none');
            $menuMovil.classList.toggle('hidden');
            $menuMovil.classList.remove('animation-open-izq-der');
            $menuMovil.classList.toggle('animation-close-der-izq');
        }
        if(e.target.matches('#enlace1')||e.target.matches('#enlace2')||e.target.matches('#enlace3')||e.target.matches('#enlace4')||e.target.matches('#enlace5')||e.target.matches('#enlace6')){
            $openMenu.classList.toggle('none');
            $closeMenu.classList.toggle('none');
            $menuMovil.classList.toggle('hidden');
            $menuMovil.classList.remove('animation-open-izq-der');
            $menuMovil.classList.toggle('animation-close-der-izq');
        }
    })
}
