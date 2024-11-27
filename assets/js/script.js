function onSearchClick(){
    document.getElementById('search-btn').onclick = function() {

        var element = document.getElementById('expand'),
            style = window.getComputedStyle(element),
            top = style.getPropertyValue('display');

        if (top === "none"){
            var elements = document.getElementsByClassName("can-disable")
            for(var i = 0; i < elements.length; i++) {
                elements[i].classList.toggle('disable-nav')
            }
            document.getElementById('expand').classList.toggle('expanded')
        }
    }

    document.getElementById('search-close-btn').onclick = function() {
        document.getElementById('expand').classList.toggle('expanded')
        var elements = document.getElementsByClassName("can-disable")
        for(var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('disable-nav')
        }
    }
}

// login
// Example validation for forms
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
});

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration successful!');
});

function toggleSearch() {
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("active");
}