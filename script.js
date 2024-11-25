document.getElementById('search-btn').onclick = function() {

    var element = document.getElementById('expand'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('display');

    if (top === "none"){
        document.getElementById('can-disable').classList.toggle('disable-nav')
        document.getElementById('expand').classList.toggle('expanded')
    }  
}

document.getElementById('search-close-btn').onclick = function() {
    document.getElementById('expand').classList.toggle('expanded')    
    document.getElementById('can-disable').classList.toggle('disable-nav')
}