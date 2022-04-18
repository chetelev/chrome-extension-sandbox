// document.querySelector('.lnXdpd').classList.add('spinspinspin')
const first = document.createElement('button')
first.innerText = 'SET DATA';
first.id ='first';

const second = document.createElement('button')
second.innerText = 'SHOUTOUT TO BACKEND.js';
second.id ='second';

document.querySelector('body').appendChild(first)
document.querySelector('body').appendChild(second)

first.addEventListener('click', () => {
    console.log('asd')
    chrome.storage.local.set({'password': '123'});
})

second.addEventListener('click', () => {
    chrome.runtime.sendMessage({message: 'Hi'});
})