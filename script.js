fetch("script.json")
    .then((response) => response.json())
    .then((data) => {
        temp = data;
        display();
    });

//method to call from response

function display() {
    temp.forEach((data1) => {
        content.innerHTML += displaContent(data1);
    });
}

//displaying all projects function

function displaContent(data1) {
    return `
    <div class="each col-12 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
    <a href="${data1.link}" class="text-decoration-none text-dark">        
    <div class="card border-0 bg-light">
            <img src="${data1.image}" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${data1.name}</h4>
              <p class="card-text">${data1.desc}</p>
            </div>
          </div>
          </a>
     </div>`;
}
var icon = document.querySelector(".search-icon");
var content = document.querySelector(".content");
var input_value = document.querySelector(".search-input");
var projects = document.querySelectorAll(".card-title");
var each = document.querySelectorAll(".each");
input_value.addEventListener("keyup", search);

//deleting all content inside the content div

function deleteAll() {
    content.innerHTML = "";
}

//searching option function

function search() {
    deleteAll();
    temp.map((x) => {
    var title = x.keywords;
    title = title.toLowerCase();

    let inputValue = input_value.value.toLowerCase();
        if (title.includes(inputValue)) {
             content.innerHTML += displaContent(x);
           } 
        else if (inputValue == null || inputValue == "  " || inputValue == " ") {
            deleteAll();
            content.innerHTML = `
                <div class="card d-flex justify-content-center align-items-center">
                     <img src="images/noresult.svg" class="card-img-top w-50" alt="">
                </div>
            `;
            }
    });
}
var insta = document.querySelector(".insta");

//search bacr expanding and collapsing function

function expandSearchBar() {
    var searchBar = document.getElementById("searchInput");
    if (searchBar.style.width === "50px") {
        searchBar.style.width = "190px";
        searchBar.placeholder = "Search";
        icon.classList.remove("fa-magnifying-glass");
        icon.classList.add("fa-xmark");
        searchBar.focus();
    } else {
        icon.classList.add("fa-magnifying-glass");
        icon.classList.remove("fa-xmark");
        searchBar.style.width = "50px";
        searchBar.placeholder = "";
        searchBar.value = "";
    }
}