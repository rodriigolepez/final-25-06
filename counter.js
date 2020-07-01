// Counter
function count(){
  var counter = { var: 0 };
  TweenMax.to(counter, 3, {
    // Acá se configura el número máximo que alcanza el contador
    var: 5600, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter').html(("000" + number).slice(-4));
    },
  });
}
count();
