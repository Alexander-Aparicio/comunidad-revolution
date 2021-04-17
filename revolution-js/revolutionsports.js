// Botón y menú para celulares
import {mobileNavigation} from './menu.js';
import {promotionalForm} from './forms.js';
import {buttonPromotion} from './btns.js';
import {masPalabrasPG} from './juegos.js';

const d = document;

d.addEventListener('DOMContentLoaded', ()=>{
    masPalabrasPG()
    mobileNavigation ('.open-menu', '.close-menu', '.menu-movil', '.btn-open', '.btn-close')
    promotionalForm ( 'promo1', 'promotionBForm', 'nameB', 'idBrother', '#closePromo')
    promotionalForm ( 'promo2', 'promotionFForm', 'nameF', 'idFriend', '#closePromoF')
    promotionalForm ( 'promo3', 'promotionPForm', 'nameP', 'idProxy', '#closePromoP')
    buttonPromotion ('#promo1', '#promo2', '#promo3')
})
