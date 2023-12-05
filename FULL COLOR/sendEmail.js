
  function enviarCorreo(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    
    var destinatario = "pruebatesis000@gmail.com"; // Reemplaza con la dirección de correo electrónico del destinatario
    var asunto = "Nuevo formulario de contacto";
    var cuerpo = "Nombre: " + nombre + "\n";
    cuerpo += "Email: " + email;
    
    var mailtoUrl = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
    window.location.href = mailtoUrl;
  }









































// document.getElementById("miFormulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
//     var nombre = document.getElementById("nombre").value;
//     var email = document.getElementById("email").value;
  
//     google.script.run.enviarCorreo(nombre, email); // Llama a la función "enviarCorreo" en Google Apps Script
//   });


//   function enviarCorreo(nombre, email) {
//     var destinatario = "pruebatesis000@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    
//     var asunto = "Nuevo formulario de contacto";
//     var mensaje = "Nombre: " + nombre + "\n";
//     mensaje += "Email: " + email + "\n";
    
//     MailApp.sendEmail(destinatario, asunto, mensaje);
//   }
































// // async function enviarCorreo() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "pachecoff210@gmail.com",
//         Password : "C3A90B596CF23E3DC70D5AA7096A6B242C09",
//         To : 'enriquealejand26@gmail.com',
//         From : "fabrizioalmeida17@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     })
//     .then(
//       message => alert(message)
//     );
// }

// const formInput = document.querySelector('form');


// formInput.addEventListener('submit', async (e)=>{
//         e.preventDefault();
//     console.log('este es el evento');
//     enviarCorreo();
// })