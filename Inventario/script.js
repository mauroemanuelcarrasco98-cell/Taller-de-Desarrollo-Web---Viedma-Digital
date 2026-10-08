// ==========================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================
const inputComponente = document.getElementById('inputComponente');
const btnAgregar = document.getElementById('btnAgregar');
const listaInventario = document.getElementById('listaInventario');
const mensaje = document.getElementById('mensaje');

// ==========================================
// 2. VERIFICACIÓN DE EXISTENCIA CON querySelectorAll()
// ==========================================
function verificarExiste(nombreNuevo) {
  // Obtenemos todos los spans que contienen nombres de componentes
  const elementosGuardados = document.querySelectorAll('.nombre-componente');
  
  let existe = false;

  // Recorremos la colección para comprobar duplicados sin distinguir mayúsculas
  elementosGuardados.forEach((elemento) => {
    if (elemento.textContent.toLowerCase().trim() === nombreNuevo.toLowerCase().trim()) {
      existe = true;
    }
  });

  return existe;
}

// ==========================================
// 3. MOSTRAR MENSAJES DE FEEDBACK AL USUARIO
// ==========================================
function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`;
}

// ==========================================
// 4. AGREGAR NUEVO COMPONENTE AL INVENTARIO
// ==========================================
function agregarComponente() {
  const valorInput = inputComponente.value.trim();

  // Validación de campo vacío
  if (valorInput === '') {
    mostrarMensaje('⚠️ Por favor, ingresa el nombre de un componente.', 'error');
    return;
  }

  // Verificación de duplicado
  if (verificarExiste(valorInput)) {
    mostrarMensaje(`❌ El componente "${valorInput}" ya está en el inventario.`, 'error');
    return;
  }

  // Creación dinámica de elementos del DOM
  const nuevoLi = document.createElement('li');
  nuevoLi.className = 'item-inventario';

  const nuevoSpan = document.createElement('span');
  nuevoSpan.className = 'nombre-componente';
  nuevoSpan.textContent = valorInput;

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = 'Quitar';

  // Ensamblado del elemento <li>
  nuevoLi.appendChild(nuevoSpan);
  nuevoLi.appendChild(btnEliminar);

  // Inserción en la lista <ul>
  listaInventario.appendChild(nuevoLi);

  // Limpieza del campo de entrada y feedback de éxito
  inputComponente.value = '';
  mostrarMensaje(`✅ Componente "${valorInput}" agregado correctamente.`, 'exito');
}

// ==========================================
// 5. ELIMINAR COMPONENTE (DELEGACIÓN DE EVENTOS)
// ==========================================
function eliminarComponente(e) {
  // Comprobamos si el clic fue en un botón de quitar
  if (e.target.classList.contains('btn-eliminar')) {
    const itemAEliminar = e.target.parentElement;
    const nombreEliminado = itemAEliminar.querySelector('.nombre-componente').textContent;
    
    itemAEliminar.remove();
    mostrarMensaje(`🗑️ "${nombreEliminado}" fue eliminado del inventario.`, 'error');
  }
}

// ==========================================
// 6. ASIGNACIÓN DE EVENTOS (addEventListener)
// ==========================================
// Evento clic en el botón agregar
btnAgregar.addEventListener('click', agregarComponente);

// Evento al presionar Enter en el input
inputComponente.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    agregarComponente();
  }
});

// Evento para eliminar elementos dinámicos mediante la lista padre[cite: 2]
listaInventario.addEventListener('click', eliminarComponente);