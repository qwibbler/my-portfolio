// NAVBAR

const items = document.getElementsByClassName('menuItem');
const windowSize = window.matchMedia('(max-width: 1080px)');

/* exported function */
function openNav() {
  if (windowSize.matches) {
    document.getElementById('drop-menu').style.height = '85vh';
    document.getElementById('drop-menu').style.boxShadow = '0 15vh #e5e5e5, 0 48px 48px rgba(37, 47, 137, 0.08)';
    document.getElementById('close_nav_btn').style.display = 'flex';
    document.getElementById('open_nav_btn').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.display = 'flex';
    }
    document.body.style.overflowY = 'hidden';
  }
}

/* exported function */
function closeNav() {
  if (windowSize.matches) {
    document.getElementById('drop-menu').style.height = '0';
    document.getElementById('drop-menu').style.boxShadow = 'none';
    document.getElementById('close_nav_btn').style.display = 'none';
    document.getElementById('open_nav_btn').style.display = 'flex';
    document.getElementById('logo').style.display = 'initial';
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.display = 'none';
    }
    document.body.style.overflowY = 'auto';
  }
}

document.getElementById('open_nav_btn').addEventListener('click', openNav);
document.getElementById('close_nav_btn').addEventListener('click', closeNav);
for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', closeNav);
}

// SCROLLSPY //

// POPUP //
const projectsInfo = [
  {
    title: 'Iqbal Day Poetry Festival',
    desc: "This is a demo website for a poetry festival held in honor of Pakistan's national poet, a man of deep thought and beautiful verse.",
    langs: ['Html', 'Css', 'Javascript'],
    imgCard: 'url("./images/projects/iqbal-day-card.png")',
    imgDesk: 'images/projects/iqbal-day-desk.png',
    imgPopup: 'images/projects/iqbal-day-mob.png',
    live: 'https://qwibbler.github.io/Capstone-Portal/',
    source: 'https://github.com/qwibbler/Capstone-Portal',
  },
  {
    title: 'To Do List',
    desc: 'Create your own personal list of all the things you have yet to do.',
    langs: ['HTML', 'CSS', 'Javascript'],
    imgCard: 'url("./images/projects/todo-card.png")',
    imgDesk: 'images/projects/todo-desk.png',
    imgPopup: 'images/projects/todo-mob.png',
    live: 'https://qwibbler.github.io/todo-list/dist/',
    source: 'https://github.com/qwibbler/todo-list',
  },
  {
    title: 'Leaderboard',
    desc: 'This is a website showing all the top players in a game. This repo is to practice the use of callbacks and promises, to learn how to use proper ES6 syntax, to use ES6 modules to write modular JavaScript and to practice using webpack to bundle JavaScript.',
    langs: ['HTML', 'CSS', 'Javascript', 'Webpack'],
    imgCard: 'url("./images/projects/leaderboard-card.png")',
    imgDesk: './images/projects/leaderboard-desk.png',
    imgPopup: './images/projects/leaderboard-mob.png',
    live: 'https://qwibbler.github.io/leaderboard/',
    source: 'https://github.com/qwibbler/leaderboard',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 4',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('./images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 5',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('./images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 6',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('./images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
    live: '#',
    source: '#',
  },
];

for (let i = 0; i < projectsInfo.length; i += 1) {
  // create wrapper
  const projWrapper = document.createElement('div');
  projWrapper.className = 'proj';
  projWrapper.style.backgroundImage = projectsInfo[i].imgCard;
  document.getElementById('projects').appendChild(projWrapper);

  // create text part
  const textDiv = document.createElement('div');
  textDiv.className = 'proj-text';
  projWrapper.appendChild(textDiv);

  // Add title
  const projTitle = document.createElement('h4');
  projTitle.textContent = projectsInfo[i].title;
  textDiv.appendChild(projTitle);

  // Add langs
  const projLangs = document.createElement('ul');
  textDiv.appendChild(projLangs);

  for (let n = 0; n < projectsInfo[i].langs.length; n += 1) {
    const listElem = document.createElement('li');
    const textElem = document.createTextNode(projectsInfo[i].langs[n]);
    listElem.appendChild(textElem);
    projLangs.appendChild(listElem);
  }

  // Add button
  const seeBtn = document.createElement('button');
  seeBtn.innerHTML = 'See Project';
  textDiv.appendChild(seeBtn);
  seeBtn.className = 'seeBtn';
  seeBtn.id = i.toString();
}

// popup window
const popupWrapper = document.getElementById('popupWrapper');

function closepopup() {
  popupWrapper.innerHTML = '';
  document.body.style.overflowY = 'auto';
}

function openPopup(id = 0) {
  // popbackground
  const popupBackground = document.createElement('div');
  popupWrapper.appendChild(popupBackground);
  popupBackground.className = 'proj_background';
  popupBackground.addEventListener('click', closepopup);

  // popupcard
  const popupcard = document.createElement('div');
  popupWrapper.appendChild(popupcard);
  popupcard.className = 'proj_card';

  // popCloseButton
  const popCloseButton = document.createElement('button');
  popupcard.appendChild(popCloseButton);
  popCloseButton.className = 'close_card';
  popCloseButton.textContent = 'X';
  popCloseButton.addEventListener('click', closepopup);

  // popupimage
  const popImg = document.createElement('img');
  popupcard.appendChild(popImg);
  popImg.className = 'proj_img';
  if (windowSize.matches) {
    popImg.src = projectsInfo[id].imgPopup;
  } else {
    popImg.src = projectsInfo[id].imgDesk;
  }

  // popupheading
  const popHead = document.createElement('h3');
  popupcard.appendChild(popHead);
  popHead.className = 'proj_title';
  popHead.textContent = projectsInfo[id].title;

  // poplaguages
  const poplaguagesul = document.createElement('ul');
  popupcard.appendChild(poplaguagesul);
  poplaguagesul.className = 'proj_langs';
  for (let i = 0; i < projectsInfo[id].langs.length; i += 1) {
    const poplanguagesli = document.createElement('li');
    poplaguagesul.appendChild(poplanguagesli);
    poplanguagesli.textContent = projectsInfo[id].langs[i];
  }

  // popdescription
  const descript = document.createElement('p');
  popupcard.appendChild(descript);
  descript.className = 'proj_desc';
  descript.textContent = projectsInfo[id].desc;

  // popupSeeButton
  const popupSeeButton = document.createElement('div');
  popupcard.appendChild(popupSeeButton);
  popupSeeButton.className = 'proj_see';

  // live
  const liveButton = document.createElement('button');
  popupSeeButton.appendChild(liveButton);
  liveButton.innerHTML = `<a href="${projectsInfo[id].live}">See live <img src="images/Live.svg" alt=""></a>`;

  // src
  const srcButton = document.createElement('button');
  popupSeeButton.appendChild(srcButton);
  srcButton.innerHTML = `<a href="${projectsInfo[id].source}">See Source <img src="images/live-github.svg"alt=""></a>`;

  // disable page scroll
  document.body.style.overflowY = 'hidden';
}

for (let k = 0; k < projectsInfo.length; k += 1) {
  // Get project button by id then add listener according to id
  const openPopupId = document.getElementsByClassName('seeBtn')[k];
  openPopupId.addEventListener('click', () => {
    openPopup(k);
  });

  // maybe make the whole project clickable?
  const openWrapper = document.getElementsByClassName('proj')[k];
  openWrapper.addEventListener('click', () => {
    openPopup(k);
  });
}

// Validate form
const form = document.getElementById('contact-form');
const email = document.getElementById('useremail');
const errorUpper = '&#9888; Your email is in uppercase. Please rewrite it in lowercase.';
const small = document.createElement('small');

function checkCase(input) {
  return /[A-Z]/.test(input); // If has upper, return True
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Form invalid by default
  let isValid = false;

  // Check email case
  const inputEmail = email.value.trim();
  if (checkCase(inputEmail)) {
    form.appendChild(small);
    small.innerHTML = errorUpper;
  } else {
    isValid = true;
  }

  // If form valid, submit
  if (isValid) {
    form.removeChild(small);
    form.submit();
  }
});

// Local Storage
const uName = document.getElementById('username');
const uMail = document.getElementById('useremail');
const uMsg = document.getElementById('comment');

// Get formData and post it to local storage
function upDateValue() {
  const formData = JSON.stringify({
    // for some reason, changing things even tricially breaks it. :(
    name: uName.value.trim(),
    email: uMail.value.trim(),
    comment: uMsg.value.trim(),
  });
  localStorage.setItem('formData', formData);
}
// On change, update values
form.addEventListener('change', upDateValue);

// Get stored values and fill them in
function loadData() {
  if (localStorage.getItem('formData') !== null) {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    uName.value = savedData.name;
    uMail.value = savedData.email;
    uMsg.value = savedData.comment;
  }
}
// Run the loader on window start
window.onload = loadData;
