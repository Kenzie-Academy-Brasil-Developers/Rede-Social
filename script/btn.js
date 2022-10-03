const btnFollow = document.querySelectorAll('#btn__follow')
for(let i = 0; i < btnFollow.length; i++){
btnFollow[i].addEventListener('click', (event) => {
    event.preventDefault()
    btnFollow[i].classList.toggle('btn__Geral')
    if(btnFollow[i].innerText == 'Seguindo'){
        btnFollow[i].innerText = 'Seguir'
    }
    else {
        btnFollow[i].innerText = 'Seguindo'
    }
})
}

