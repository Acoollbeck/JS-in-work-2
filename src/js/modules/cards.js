import { getCards } from "../services/requests"

export default function cards() {
    const btn = document.querySelector('.button-styles')
    const wrapperCards = document.querySelector('#styles .row')

    btn.addEventListener('click', () => {
        getCards('http://localhost:3000/styles')
            .then(response => createCards(response))
            .catch(error => console.log(error))
            .finally(() => btn.remove())
    })

    function createCards (response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div')
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp')

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
				</div>
            `
            wrapperCards.appendChild(card)
        })
    }
}