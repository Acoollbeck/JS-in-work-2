
import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import cards from "./modules/cards";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger"

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals()
    sliders('.feedback-slider-item', 'gorizontal', '.main-prev-btn', '.main-next-btn')
    sliders('.main-slider-item', 'vertical')
    forms()
    mask()
    cards()
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter()
    pictureSize()
    accordion()
    burger('.burger', '.burger-menu')
   
    const size = document.querySelector('#size')
    size.addEventListener('input', function(){
        console.log(size.options[size.selectedIndex].text)
    })

})