/** SEARCH */
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



/** GOOGLE MAP */
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


/** FAQ */
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