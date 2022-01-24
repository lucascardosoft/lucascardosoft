const langEl = document.querySelector('.language')
const link = document.querySelectorAll('.language-link')
const headlineEl = document.querySelector('.headline')
const meEl = document.querySelector('.me')

link.forEach(el=> {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language')

        headlineEl.textContent = data[attr].headline;
        meEl.textContent = data[attr].me;
    });
})

var data = {
    "portuguese":{
        "headline":
        "Faço design de produtos digitais, focando na arquitetura, fluxos de experiência do usuário e design de interface.",
        "me":
        "Pode me chamar de Cardoso, sou um Designer Full-Stack brasileiro."
    },

    "english":{
        "headline":
        "I design digital products, focusing on architecture, user experience flows and interface design.",
        "me":
        "You can call me Cardoso, i'm a brazilian Full-Stack Desginer."
    }
}