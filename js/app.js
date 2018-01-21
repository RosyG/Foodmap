
  /*Función que manda a llamar al contenedo que será ocultado en el tiempo de la variable time, indicado en el body, al cargarse la página.*/
  function splash(time) {
  /*Función de splashscreen que recibe al tiempo en ms*/
  setTimeout(function () {
    $('#splashscreen').hide();
  }, time);
  }

  /*Mandando a llamar a todos los elementos de HTML por DOM.*/
  var $nameRestaurant = $("#name-restaurant");
  var $imagen = $("#img-restaurant");
  var $motto = $("#motto");
  var $adress = $("#adress");
  var $princeRange = $("#price-range");
  var $homeService =$("#home-service");

  /*Ejecutando el modal al dar click en las imagenes, para mostrar más información sobre los restaurantes*/
  $("#modal1").modal()

  ///////////////////////////
  /*Ejecutando la función para acceder a la data, que contiene la información del restaurante correspondiente a la imagen.*/
  $("#Japonesa").click(accessData);


/*Función que añade la información de la data, tiene como parametros:
Nombre del restaurante, foto, leyenda, dirección, rango de precios y si tiene o no servicio a domicilio.*/
function accessData () {
  var $index = $("#Japonesa").data("index");/*Indice que corresponde al objeto dentro del arreglo.*/
////////////////////////////
  /*Valores de la data en cada rubro.*/
  var food = data[$index].food;
  var name = data[$index].name;
  var motto = data[$index].motto;//*++++++++++++++
  var adress = data[$index].adress;
  var src = data[$index].photo;//+++++++++
  var princeRange = data[$index].prince;//+++++++++++
  var homeService =  data[$index].services;

  console.log(src);
  console.log(food);
  console.log(adress);
  console.log(name);

  /*Ejecutando la función que dibuja los valores en HTML.*/
  paintInformationInHtml (name,motto,adress,src,princeRange,homeService);

  $("#close").click(cleanVar);/*Al cerrar el modarl se ejecuta la función cleanVar() para poder borrar todos los campos.*/

}//Fin de función accessData().
  /*Declaraión de la función que pinta los valores de la información del restaurante en HTML.*/
  function paintInformationInHtml (name,motto,adress,src,princeRange,homeService) {
    /*Agregando a lo que se accedio por medio de DOM.*/
    $nameRestaurant.append(name);
    $imagen.attr("src",src);
    $motto.append(motto)
    $adress.append(adress);
    $princeRange.append(princeRange);
    $homeService.append(homeService);

  }
  /*Declaración de la función que limpia los campos.*/
  function cleanVar() {
    $nameRestaurant.empty();
    $imagen.empty();
    $motto.empty();
    $adress.empty();
    $princeRange.empty();
    $homeService.empty();

  }
