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
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgDesk:  'images/Snapshoot-Portfolio-med.jpg',
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

let id = 0;
const openPopup = function(id = 0) {
  // popbackground
  let popupBackground = document.createElement('div');
  popupWrapper.appendChild(popupBackground);
  popupBackground.className = 'proj_background';
  popupBackground.addEventListener('click', closepopup)

  // popupcard
  let popupcard = document.createElement('div');
  popupWrapper.appendChild(popupcard);
  popupcard.className = 'proj_card';

  // popCloseButton
  let popCloseButton = document.createElement('button');
  popupcard.appendChild(popCloseButton);
  popCloseButton.className = 'close_card';
  popCloseButton.textContent = 'X';
  popCloseButton.addEventListener('click', closepopup)

  // popupimage
  let popImg = document.createElement('img');
  popupcard.appendChild(popImg);
  popImg.className = 'proj_img';
  if (windowSize.matches) {
    popImg.src = projectsInfo[id].imgPopup;
  } else {
    popImg.src = projectsInfo[id].imgDesk;
  }

  // popupheading
  let popHead = document.createElement('h3');
  popupcard.appendChild(popHead);
  popHead.className = 'proj_title';
  popHead.textContent = projectsInfo[id].title;

  // poplaguages
  let poplaguagesul = document.createElement('ul');
  popupcard.appendChild(poplaguagesul);
  poplaguagesul.className = 'proj_langs';
  for(let i = 0; i<projectsInfo[id].langs.length; i++) {
    let poplanguagesli = document.createElement('li');
    poplaguagesul.appendChild(poplanguagesli);
    poplanguagesli.textContent = projectsInfo[id].langs[i];
  }

  // popdescription
  let descript = document.createElement('p');
  popupcard.appendChild(descript)
  descript.className = 'proj_desc';
  descript.textContent = projectsInfo[id].desc;

  // popupSeeButton
  let popupSeeButton = document.createElement('div');
  popupcard.appendChild(popupSeeButton);
  popupSeeButton.className = 'proj_see';
  let liveButton = document.createElement('button');
  popupSeeButton.appendChild(liveButton);
  liveButton.textContent = 'See live';
  let srcButton = document.createElement('button');
  popupSeeButton.appendChild(srcButton);
  srcButton.textContent = 'See source';
}

const closepopup = function() {
  popupWrapper.innerHTML = '';
}

for (let k = 0; k < projectsInfo.length; k += 1) {
  let openPopupId = document.getElementById(k.toString());
  openPopupId.addEventListener('click', function () {
    openPopup(k);
  });
}
