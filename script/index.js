const postagens = document.querySelector('.section__posts')


function listPost(postList, userList) {
    for (let i = 0; i < postList.length; i++) {
        let user = userList[i]
        let post = postList[i]
        let card = criarCard(user, post)

        postagens.appendChild(card)
    }
}

listPost(posts, users)

function criarCard(user, item) {
    let iconeUser = user.img
    let nameUser = user.user
    let stackUser = user.stack
    let tituloPost = item.title
    let textPost = item.text

    let tagUl = document.createElement('ul')
    let tagLi = document.createElement('li')
    tagLi.classList.add('flex')
    tagLi.id = 'local__posts'
    let tagIcon = document.createElement('img')
    tagIcon.classList.add('img__user')
    let sectionUser = document.createElement('section')
    sectionUser.classList.add('flex', 'column', 'margin__left')
    let name = document.createElement('h2')
    let stack = document.createElement('p')
    let postSection = document.createElement('section')
    postSection.classList.add('posts___container')
    let postH = document.createElement('h1')
    postH.classList.add('theme__user__post', 'text__align')
    let postP = document.createElement('p')
    postP.classList.add('text__align', 'overflow', 'paragraph')
    let btnSection = document.createElement('section')
    btnSection.classList.add('flex', 'row')
    let btnPost = document.createElement('button')
    btnPost.classList.add('border-radius', 'outline', 'btn__open__post', 'cursor', 'flex', 'center', 'justify__center')
    btnPost.id = 'btn__open__post'
    btnPost.addEventListener('click',(event) => {
        event.preventDefault()
        renderModal(user, item)
    })
    let heartFigure = document.createElement('figure')
    heartFigure.classList.add('flex', 'heart__img')
    let heart = document.createElement('img')


    tagIcon.src = iconeUser
    name.innerText = nameUser
    stack.innerText = stackUser
    postH.innerText = tituloPost
    postP.innerText = textPost
    btnPost.innerText = 'Abrir Post'
    heart.src = `../../assets/img/Vector.png`


    tagUl.appendChild(tagLi)
    tagLi.appendChild(tagIcon)
    tagLi.appendChild(sectionUser)
    sectionUser.appendChild(name)
    sectionUser.appendChild(stack)
    sectionUser.appendChild(postSection)
    postSection.appendChild(postH)
    postSection.appendChild(postP)
    postSection.appendChild(btnSection)
    btnSection.appendChild(btnPost)
    btnSection.appendChild(heartFigure)
    heartFigure.appendChild(heart)



    return tagUl

}