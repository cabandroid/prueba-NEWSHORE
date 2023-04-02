Prueba frontend por: David Caballero, Ingeniero de Sistemas

Pasos para hacer funcionar correctamente el aplicativo:
1. Inicialmente se debe tener instalado el AngularCLI.
2. Una vez descargado el proyecto, se debe ejecutar el siguiente comando por terminal:
    $ npm install
3. Para el despliegue de la app en el navegador se debe ejecutar por terminal:
    $ ng serve --open
4. Se podrá observar en la URL por defecto: http://localhost:4200/airline

---NOVEDADES:
Se consume el API, se implementa una programación orientada a objetos donde se realiza el uso 
de pipes para la conversion de la moneda, validaciones propias para que los campos sean distintos, de 
3 letras y en mayusculas, la modularización de componentes, implementación de componente padre e hijo 
para pasar variables, implementación de Tailwind para el manejo de estilos CSS y diseño.

---USO DEL APP:
Inicialmente se debe ingresar la ciudad de origen y la de llegada (ambas no pueden ser iguales) y dar clic en 
"buscar vuelos". La moneda por defecto son USD (Dólares), sin embargo, al hacer uso de las pipes permite modificar el precio
en tiempo real de la moneda con su divisa.