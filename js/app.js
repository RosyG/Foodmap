  function splash(time) {
  setTimeout(function () {
   $('#splashscreen').hide();
  }, time);
  }

  $("#modal1").modal();


/*
$("#food-1").mouseover (function () {
  $("#text-1").fadeIn(500);
}).mouseout (function () {
  $("#text-1").fadeOut(500);

});

//Otra manera de escribir el código anterior.
$("#food-1").mouseover (show).mouseout (hidden);

function show () {
  $("#text-1").fadeIn(500);
}
function hidden () {
  $("#text-1").fadeOut(500);
}


$("#food-3").mouseover (function (){
  $("#food-3").fadeToggle(5000);

  $("#food-4").fadeIn(5000);
  $("#food-4").fadeToggle(5000);
  $("#food-4").remove();
  $("#food-5").fadeIn(5000);
}).
$("#food-5").mouseout (function () {
  /*$("#food-5").fadeOut(5000);*/
/*
  $("#food-4").fadeIn(5000);

});

  /*$("#food-1").mouseover (function () {
    $("#text-1").fadeIn(500);
  }).mouseout (function () {
    $("#text-1").fadeOut(500);

  });

//Otra manera de escribir el código anterior.
  $("#food-1").mouseover (show).mouseout (hidden);

  function show () {
    $("#text-1").fadeIn(500);
  }
  function hidden () {
    $("#text-1").fadeOut(500);
  }


  $("#food-3").mouseover (function (){
    $("#food-3").fadeToggle(5000);

    $("#food-4").fadeIn(5000);
    $("#food-4").fadeToggle(5000);
    $("#food-4").remove();
    $("#food-5").fadeIn(5000);
  }).
  $("#food-5").mouseout (function () {
    /*$("#food-5").fadeOut(5000);*/
  /*
    $("#food-4").fadeIn(5000);

  });
*/
console.log(data[0].food);
