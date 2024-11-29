function onSearchClick(){
    var element = document.getElementById('expand');
    var   style = window.getComputedStyle(element);
    var  top = style.getPropertyValue('display');

    if (top === "none"){
        var elements = document.getElementsByClassName("can-disable")
        for(var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('disable-nav')
        }
        document.getElementById('expand').classList.toggle('expanded')
    }
}

function onSearchClose(){    
    var element = document.getElementById('expand');
    var   style = window.getComputedStyle(element);
    var  top = style.getPropertyValue('display');
    if (top !== "none"){
        document.getElementById('expand').classList.toggle('expanded')
        var elements = document.getElementsByClassName("can-disable")
        for(var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('disable-nav')
        }
    }
    
}

/** GOOGLE MAP */
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


/** FAQ */
window.onload = function(){
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
        });
    });
    
    // SOCIAL PANEL JS
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');
    
    floating_btn.addEventListener('click', () => {
        social_panel_container.classList.toggle('visible')
    });
    
    close_btn.addEventListener('click', () => {
        social_panel_container.classList.remove('visible')
    });    


   
}

function submitClick(button, path)
{
    const form = button.closest("form")
    const requiredElements = form.querySelectorAll(":required");

    let valid = true;

    requiredElements.forEach(element => {
        if(!element.value){
            valid = false;
        }
    });

    if (!valid) {
        form.reportValidity();
        return;
    }

    window.location.href = path;  
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



/* collapse mobile nav menu if open*/
window.addEventListener('resize', (size) => {
    if (document.documentElement.clientWidth >= 920){
        document.getElementById("check").checked = false;
    } 
    if (document.documentElement.clientWidth < 920){
        onSearchClose()
    }     
});