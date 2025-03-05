
import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import cards from "./modules/cards";
import calc from "./modules/calc";

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals()
    sliders('.feedback-slider-item', 'gorizontal', '.main-prev-btn', '.main-next-btn')
    sliders('.main-slider-item', 'vertical')
    forms()
    mask()
    cards()
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
   
    const size = document.querySelector('#size')
    size.addEventListener('input', function(){
        console.log(size.options[size.selectedIndex].text)
    })

})