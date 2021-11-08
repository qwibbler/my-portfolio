var items = document.getElementsByClassName("menuItem")

function openNav () {
  document.getElementById("drop-menu").style.height = "85vh";
  document.getElementById("closeside_menu").style.display = "flex";
  document.getElementById("dropbtn").style.display = "none";
  document.getElementById("logo").style.display = "none";
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "flex";
  }
}

function closeNav() {
  document.getElementById("drop-menu").style.height = "0";
  document.getElementById("closeside_menu").style.display = "none";
  document.getElementById("dropbtn").style.display = "flex";
  document.getElementById("logo").style.display = "initial";
  for (let j = 0; j < items.length; j++) {
    items[j].style.display = "none";
  }
}