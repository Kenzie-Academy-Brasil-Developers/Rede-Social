function renderModal(user, item) {
    let modalIcon = user.img
    let modalUser = user.user
    let modalStack = user.stack
    let modalTitle = item.title
    let modalText = item.text

    const divMain = document.createElement('div')
    divMain.classList.add('background__modal', 'flex', 'fixed', 'center', 'justify__center', 'border-radius')
    const divBtn = document.createElement('button')
    divBtn.classList.add('btn__close__modal', 'cursor','flex', 'absolute')
    const divContent = document.createElement('div')
    divContent.classList.add('div__content__modal')
    const divImgFlex = document.createElement('div')
    divImgFlex.classList.add('flex')
    const divImg = document.createElement('img')
    divImg.classList.add('img__user', 'img__modal')
    const divModalFlex = document.createElement('div')
    divModalFlex.classList.add('modal__wh', 'flex','column' )
    const divName = document.createElement('h2')
    divName.classList.add('name__modal')
    const divP = document.createElement('p')
    divP.classList.add('p__modal')
    const divTitle = document.createElement('h1')
    divTitle.classList.add('moda__title')
    const divText = document.createElement('p')
    divText.classList.add('text__modal')

    divImg.src = modalIcon
    divName.innerText = modalUser
    divP.innerText = modalStack
    divTitle.innerText = modalTitle
    divText.innerText = modalText
    divBtn.innerText = 'X'

    divBtn.addEventListener('click', () => {
        divMain.remove()
    })

    document.querySelector('body').append(divMain)
    divMain.appendChild(divContent)
    divContent.appendChild(divBtn)
    divContent.appendChild(divImgFlex)
    divImgFlex.appendChild(divImg)
    divImgFlex.appendChild(divModalFlex)
    divModalFlex.appendChild(divName)
    divModalFlex.appendChild(divP)
    divContent.appendChild(divTitle)
    divContent.appendChild(divText)
}

const scrollTitle = document.querySelector('.navbar__title')

scrollTitle.addEventListener('click', () => {
    window.scroll(0, 0)
    scrollTitle.style.transitionDelay = "2s"
    scrollTitle.style.cursor = "pointer"
})

