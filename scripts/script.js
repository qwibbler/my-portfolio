const items = document.getElementsByClassName('menuItem');
const windowSize = window.matchMedia('(max-width: 1080px)');

/* exported function */
function openNav() {
  if (windowSize.matches) {
    document.getElementById('drop-menu').style.height = '85vh';
    document.getElementById('drop-menu').style.boxShadow = '0 15vh #e5e5e5, 0 48px 48px rgba(37, 47, 137, 0.08)';
    document.getElementById('closeside_menu').style.display = 'flex';
    document.getElementById('dropbtn').style.display = 'none';
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
    document.getElementById('closeside_menu').style.display = 'none';
    document.getElementById('dropbtn').style.display = 'flex';
    document.getElementById('logo').style.display = 'initial';
    for (let j = 0; j < items.length; j += 1) {
      items[j].style.display = 'none';
    }
  }
}

document.getElementById('dropbtn').addEventListener('click', openNav);
document.getElementById('closeside_menu').addEventListener('click', closeNav);
