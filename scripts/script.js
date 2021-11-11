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
    title: 'Multi-Post Stories Gain+Glory 1',
    desc: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 2',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 3',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 4',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 5',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory 6',
    desc: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk: 'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
];

for (let i = 0; i < projectsInfo.length; i += 1) {
  // create wrapper
  const projWrapper = document.createElement('div');
  projWrapper.className = 'proj';
  projWrapper.style.backgroundImage = projectsInfo[i].imgCard;
  document.getElementById('projects').appendChild(projWrapper);
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
  seeBtn.setAttribute('id', i.toString());
}

// popup window
const popupWrapper = document.getElementById('popupWrapper');

function closepopup() {
  popupWrapper.innerHTML = '';
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
  const liveButton = document.createElement('button');
  popupSeeButton.appendChild(liveButton);
  liveButton.innerHTML = 'See live <img src="images/Live.svg" alt="">';
  const srcButton = document.createElement('button');
  popupSeeButton.appendChild(srcButton);
  srcButton.innerHTML = 'See Source <img src="images/live-github.svg"alt="">';
}

for (let k = 0; k < projectsInfo.length; k += 1) {
  const openPopupId = document.getElementById(k.toString());
  openPopupId.addEventListener('click', () => {
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
  const savedData = JSON.parse(localStorage.getItem('formData'));
  uName.value = savedData.name;
  uMail.value = savedData.email;
  uMsg.value = savedData.comment;
}
// Run the loader on window start
window.onload = loadData;
