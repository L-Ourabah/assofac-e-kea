function validateForm() {
    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    
    // Regex pour validation
    const nameRegex = /^[A-Za-z\s]+$/; // Permet seulement les lettres et les espaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format d'e-mail valide
    
    // Réinitialiser les messages d'erreur
    document.getElementById('nom-error').textContent = '';
    document.getElementById('prenom-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    
    // Valider les champs
    let isValid = true;
    
    if (!nameRegex.test(nom)) {
      document.getElementById('nom-error').textContent = 'Nom invalide';
      isValid = false;
    }
    
    else if (!nameRegex.test(prenom)) {
      document.getElementById('prenom-error').textContent = 'Prénom invalide';
      isValid = false;
    }
    
    else if (!emailRegex.test(email)) {
      document.getElementById('email-error').textContent = 'E-mail invalide';
      isValid = false;
    }
    if (isValid){
        alert(" Félicitations !! Votre message à bien été envoyé.")
    }
    return isValid;
  }

