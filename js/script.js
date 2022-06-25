const eyeColor = 'Green / Зелений';
console.log(eyeColor);

const menuBurger = document.querySelector('.fs-header__burgerWraper')
const elementsTwoAndThree = document.querySelector('.fs__elementsTwoAndThree')

menuBurger.addEventListener('click', (e) => {
   menuBurger.classList.toggle('fs-header__burgerWraper__activi')
   elementsTwoAndThree.classList.toggle('fs__elementsTwoAndThree__activi')
});

const createButtonOne = (e) => {
   const button = document.createElement('button');
   button.style.width = '155px'
   button.style.height = '41px'
   button.style.background = '#F5443B'
   button.style.borderRadius = '6px'
   button.style.color = '#ffffff'
   button.textContent = 'Access Class'
   buttonWrkOne.insertAdjacentElement('beforeend', button)
};
const createButtonTwo = (e) => {
   const button = document.createElement('button');
   button.style.width = '155px'
   button.style.height = '41px'
   button.style.background = '#F5443B'
   button.style.borderRadius = '6px'
   button.style.color = '#ffffff'
   button.textContent = 'Access Class'
   buttonWrkTwo.insertAdjacentElement('beforeend', button)
};
const createButtonThree = (e) => {
   const button = document.createElement('button');
   button.style.width = '155px'
   button.style.height = '41px'
   button.style.background = '#F5443B'
   button.style.borderRadius = '6px'
   button.style.color = '#ffffff'
   button.textContent = 'Access Class'
   buttonWrkThree.insertAdjacentElement('beforeend', button)
};
const createButtonFour = (e) => {
   const button = document.createElement('button');
   button.style.width = '155px'
   button.style.height = '41px'
   button.style.background = '#F5443B'
   button.style.borderRadius = '6px'
   button.style.color = '#ffffff'
   button.textContent = 'Access Class'
   buttonWrkFour.insertAdjacentElement('beforeend', button)
};


const frlElementOne = document.querySelector('.frl-elementEinz')
const frlElementTwo = document.querySelector('.frl-elementTwo')
const frlElementThree = document.querySelector('.frl-elementThree')
const frlElementFour = document.querySelector('.frl-elementFour');

const buttonWrkOne = document.querySelector('.frl-element__buttonWrapperOne')
const buttonWrkTwo = document.querySelector('.frl-element__buttonWrapperTwo');
const buttonWrkThree = document.querySelector('.frl-element__buttonWrapperThree');
const buttonWrkFour = document.querySelector('.frl-element__buttonWrapperFour');

frlElementOne.addEventListener('mouseenter', (e) => {
   e.target.classList.toggle('frl-element__activi')
   timeout = setTimeout(createButtonOne, 300)

})
frlElementOne.addEventListener('mouseleave', (e) => {
   clearTimeout(timeout)
   e.target.classList.remove('frl-element__activi')
   buttonWrkOne.innerHTML = '';

})


frlElementTwo.addEventListener('mouseenter', (e) => {
   e.target.classList.toggle('frl-element__activi')
   timeout = setTimeout(createButtonTwo, 300)
})
frlElementTwo.addEventListener('mouseleave', (e) => {
   clearTimeout(timeout)
   e.target.classList.toggle('frl-element__activi')
   buttonWrkTwo.innerHTML = ''
})
frlElementThree.addEventListener('mouseenter', (e) => {
   e.target.classList.toggle('frl-element__activi')
   timeout = setTimeout(createButtonThree, 300)
})
frlElementThree.addEventListener('mouseleave', (e) => {
   clearTimeout(timeout)
   e.target.classList.toggle('frl-element__activi')
   buttonWrkThree.innerHTML = ''
})
frlElementFour.addEventListener('mouseenter', (e) => {
   e.target.classList.toggle('frl-element__activi')
   timeout = setTimeout(createButtonFour, 300)
})
frlElementFour.addEventListener('mouseleave', (e) => {
   clearTimeout(timeout)
   e.target.classList.toggle('frl-element__activi')
   buttonWrkFour.innerHTML = ''
})













