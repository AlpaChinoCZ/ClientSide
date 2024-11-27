// Načtení headeru
fetch('includes/header.html')
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch header.");
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

// Načtení footeru
fetch('includes/footer.html')
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch footer.");
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));