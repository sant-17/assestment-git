document.getElementById("early-access-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const platform = document.getElementById("platform").value;
  
    // Validar campos
    if (!name || !email || !platform) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }
  
    // Simular envío exitoso
    alert(`¡Gracias, ${name}! Pronto recibirás más información sobre el Early Access en tu correo.`);
  });
  