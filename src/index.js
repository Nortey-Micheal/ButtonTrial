import './index.css';
import menuBg from './menu.svg';
import closeBg from './close.svg';

const Body = document.querySelector('body');

function Header () {
    const navbar = document.createElement('div');
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between';
    navbar.style.alignItems = 'center';

    const logo = document.createElement('p');
    logo.innerText = 'LOGO';

    const title = document.createElement('p');
    title.innerText = 'BUTTON TRIALS';
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    
    const button = document.createElement('button');
    button.classList.add('menu');
    button.style.backgroundImage = `url(${menuBg})`;
    button.style.backgroundSize = '30px 30px';
    button.style.height = '40px';
    button.style.width = '40px';

    navbar.appendChild(logo);
    navbar.appendChild(title);
    navbar.appendChild(button);

    return navbar;
}

const header = Header();
Body.appendChild(header);

function AddEvents(menuBtn,closeBtn,aside) {
    menuBtn.addEventListener('click', () => {
        aside.style.display = 'flex';
        closeBtn.addEventListener('click', () => {
            aside.style.display = 'none';
        })
    })

}

const button = document.querySelector('.menu');
const aside = document.querySelector('aside')
const closeBtn = document.querySelector('aside>div:first-of-type>button');

AddEvents(button,closeBtn,aside)


