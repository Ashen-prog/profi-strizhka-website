//////////////////////////////Документы сайта

//Переключени разделов

const menuItems = document.querySelectorAll('.documents_left-menu li');
const contentBlocks = document.querySelectorAll('.documents_right-side_text');
const rightSide = document.querySelector ('.documents_right-side')
const documents = document.querySelector('.documents') 
const documentsH2 = documents.querySelectorAll('.documents_h2-mobile')

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
    menuItems.forEach((item) =>
        item.classList.remove('documents_left-menu_acive')
    );
    contentBlocks.forEach((block) =>
        block.classList.remove('documents_right-side_text_active')
    );

    menuItem.classList.add('documents_left-menu_acive');
    const targetId = menuItem.getAttribute('data-target');
    document
        .getElementById(targetId)
        .classList.add('documents_right-side_text_active');
        rightSide.style.left = -50 + '%';
        documents.style.height = 'inherit';
    });
});

documentsH2.forEach((h2) => {h2.addEventListener('click', () => {
    rightSide.style.left = 100 + '%';
    documents.style.height = 334 + 'px';
});});