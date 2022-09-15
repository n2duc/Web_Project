const closeBtn = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")
const searchBtn = document.querySelector(".bx-search-alt")
const logoutBtn = document.querySelector(".bx-log-in-circle")

closeBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("active");
    menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("active");
    menuBtnChange();
});

logoutBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("active");
  menuBtnChange();
});

//change menu icon 
function menuBtnChange() {
   if(sidebar.classList.contains("active")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
} 