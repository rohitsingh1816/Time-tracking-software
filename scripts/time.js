// --------------Sidebar Dropdown menu--------------

var dropdown = document.getElementsByClassName("dropdown1");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// ----------------Popup Form----------------

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// -------------------------------------------------------------
function openNav() {
    document.getElementById("my_Side_nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("my_Side_nav").style.width = "0";
}