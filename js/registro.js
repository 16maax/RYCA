const btnGuardar = document.getElementById("guardar");

btnGuardar.addEventListener("click", function(event) {

  event.preventDefault();
  
  const nombre = document.getElementById("nom").value;
  const curp = document.getElementById("curp").value;
  const telefono = document.getElementById("tel").value;
  const correo = document.getElementById("email").value;

  const usuario = { nombre, curp, telefono, correo };
  
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  if (usuarios === null) {
    usuarios = [];
  }
  
  usuarios.push(usuario);
  
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
  document.getElementById("nom").value = "";
  document.getElementById("curp").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("email").value = "";
});

localStorage.removeItem('usuarios');

const codigoBarras = document.getElementById('codigo-barras');
JsBarcode(codigoBarras, "Denominación/Razón Social: REFACCIONAMIENTO Y COMERCIALIZACION PARA LA AUTOMATIZACION");
JsBarcode(codigoBarras, "Denominación/Razón Social: REFACCIONAMIENTO Y COMERCIALIZACION PARA LA AUTOMATIZACION", {
  width: 2,
  height: 30,
  format: "CODE128",
  displayValue: true,
  textPosition: "bottom"
});
