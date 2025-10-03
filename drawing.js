// Variable global para que sea accesible desde el script principal (index.html)
var drawingcanvas; 
var canvas = document.getElementById("bigcanvas");

// Esperar a que Fabric.js esté cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Inicializar Fabric.js en el canvas
    drawingcanvas = new fabric.Canvas('bigcanvas', {
        isDrawingMode: true,
        backgroundColor: '#000' // Fondo negro
    });

    // Configuración del pincel para dibujar en blanco
    drawingcanvas.freeDrawingBrush.color = "white";
    drawingcanvas.freeDrawingBrush.width = 15;
});

// Función global para limpiar que se llama desde index.html
function limpiarFabric() {
    if (drawingcanvas) {
        // Limpiar todos los objetos dibujados
        drawingcanvas.clear();
        // Restaurar el fondo negro después de la limpieza
        drawingcanvas.backgroundColor = '#000';
        drawingcanvas.renderAll();
    }
}