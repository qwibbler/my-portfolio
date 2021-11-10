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
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
    imgPopup: 'images/Snapshoot-Portfolio-components.jpg',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum',
    langs: ['Ruby on rails', 'CSS', 'Javascript', 'HTML'],
    imgCard: "url('../images/Img-Plaholder-project.png')",
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
}
