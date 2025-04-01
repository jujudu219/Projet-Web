document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        if (name && email) {
            alert(`Merci ${name}, votre message a bien été envoyé !`);
            form.reset();
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});
