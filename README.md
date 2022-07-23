# s17ajax
Metodos AJAX

El método $.ajax es configurado a través de un objeto, el cual contiene todas las instrucciones que necesita jQuery para completar la petición. Dicho método es particularmente útil debido a que ofrece la posibilidad de especificar acciones en caso que la petición haya fallado o no. Además, al estar configurado a través de un objeto, es posible definir sus propiedades de forma separada, haciendo que sea más fácil la reutilización del código. Puede visitar http://api.jquery.com/jQuery.ajax/ para consultar la documentación sobre las opciones disponibles en el método.

https://www.arkaitzgarro.com/jquery/capitulo-7.html#:~:text=ajax-,El%20m%C3%A9todo%20%24.,petici%C3%B3n%20haya%20fallado%20o%20no.

Método	Descripción
$.ajax()	Realiza una petición AJAX asíncrona

$.ajaxPrefilter()	Manejar personalizados opciones Ajax o modificar las opciones existentes antes de cada solicitud se envía y antes de que sean procesados por $.ajax()

$.ajaxSetup()	Establece los valores por defecto para futuras peticiones AJAX

$.ajaxTransport()	Crea un objeto que se encarga de la transmisión real de datos Ajax

$.get()	Carga los datos de un servidor a través de un HTTP AJAX GET solicitud

$.getJSON()	cargas de datos JSON-codificado desde un servidor mediante una petición HTTP GET

$.getScript()	(Cargas) y ejecuta un JavaScript desde un servidor mediante una solicitud HTTP GET AJAX

$.param()	Crea una representación serializada de una matriz u objeto (puede ser utilizado como cadena de consulta URL para peticiones AJAX)

$.post()	Carga los datos de un servidor mediante una solicitud POST HTTP AJAX

ajaxComplete()	Especifica una función a ejecutar cuando la petición AJAX completa

ajaxError()	Especifica una función a ejecutar cuando la petición AJAX se completa con un error

ajaxSend()	Especifica una función a ejecutar antes de que la petición AJAX se envía

ajaxStart()	Especifica una función a ejecutar cuando la primera petición AJAX se inicia

ajaxStop()	Especifica una función a ejecutar cuando todas las peticiones AJAX han completado

ajaxSuccess()	Especifica una función a ejecutar cuando una petición AJAX completa con éxito

load()	Carga los datos de un servidor y pone los datos devueltos en el elemento seleccionado

serialize()	Codifica un conjunto de elementos de formulario como una cadena de presentación

serializeArray()	Codifica un conjunto de elementos de formulario como una serie de nombres y valores

http://www.w3bai.com/es/jquery/jquery_ref_ajax.html#gsc.tab=0
