// Get the popup
var popup = document.getElementById("popupcalc");

// Get the button that opens the popup
var btn = document.getElementById("opencalc");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the popup
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popup.style.display = "none";
  change_view(2);
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
    change_view(2);
  }
}

//Calculator behavior

String.prototype.format = function () {
        var a = this;
        for (var k in arguments) {
            a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
        }
        return a
    }

function calculate() {
  var container = document.getElementById("calcresulttable");
  var tension = document.getElementById("tension").value;
  var corriente = document.getElementById("corriente").value;
  var longitud = document.getElementById("longitud").value;
  var monofasico = document.getElementById("monofasico");
  var tipodetension = 1.732;
  if(monofasico.checked) {
    tipodetension = 2;
  }
  var caidatension = 0;
  var porcentaje = 0;
  var row = `
  <tr>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana>{0}</font></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana><b>{1}</b></form></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana><b>{2}</b></form></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana><b>{3}</b></form></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana>{4}</font></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana>{5}</font></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana color=#008000><b>{6}</b></font></td>
    <td align=center bgcolor=#FFFFFF><font size=2 face=Verdana color=#008000><b>{7}</b></font></td>
  </tr>
  `;
  if(corriente <= 76){
	caidatension = (tipodetension * corriente * longitud * (1.39 * 0.8 + 0.0973 * 0.6));
	porcentaje = (caidatension/tension)*100;
  	container.innerHTML += row.format("3x25+50",tension,corriente,longitud,26,76,caidatension.toFixed(2),porcentaje.toFixed(2));
  }
  if(corriente <= 96){
	caidatension = (tipodetension * corriente * longitud * (1.01 * 0.8 + 0.0965 * 0.6));
	porcentaje = (caidatension/tension)*100;
  	container.innerHTML += row.format("3x35+50",tension,corriente,longitud,30,96,caidatension.toFixed(2),porcentaje.toFixed(2));
  }
  if(corriente <= 117){
	caidatension = (tipodetension * corriente * longitud * (0.744 * 0.8 + 0.0931 * 0.6));
	porcentaje = (caidatension/tension)*100;
  	container.innerHTML += row.format("3x50+50",tension,corriente,longitud,29,117,caidatension.toFixed(2),porcentaje.toFixed(2));
  }
  if(corriente <= 152){
	caidatension = (tipodetension * corriente * longitud * (0.514 * 0.8 + 0.0915 * 0.6));
	porcentaje = (caidatension/tension)*100;
  	container.innerHTML += row.format("3x70+50",tension,corriente,longitud,36,152,caidatension.toFixed(2),porcentaje.toFixed(2));
  }
  if(corriente <= 190){
	caidatension = (tipodetension * corriente * longitud * (0.372 * 0.8 + 0.0891 * 0.6));
	porcentaje = (caidatension/tension)*100;
  	container.innerHTML += row.format("3x95+50",tension,corriente,longitud,36,190,caidatension.toFixed(2),porcentaje.toFixed(2));
  }
}

function change_view(mode) {
  var calcform = document.getElementById("calcform");
  var calcresult = document.getElementById("calcresult");
  if(mode == 1){
    calcform.style.display = "none";
    calcresult.style.display = "block";
  }else if(mode == 2){
    calcform.style.display = "block";
    calcresult.style.display = "none";
    var tension = document.getElementById("tension");
    tension.value = "";
    var corriente = document.getElementById("corriente");
    corriente.value = "";
    var longitud = document.getElementById("longitud");
    longitud.value = "";
    var monofasico = document.getElementById("monofasico");
    monofasico.checked = true;
  	var container = document.getElementById("calcresulttable");
	container.innerHTML = `
    <tr>
      <td width="12%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Formación Cable</b></font></td>
      <td width="12%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Tensión Ingresada (V)</b></font></td>
      <td width="12%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Corriente Ingresada (A)</b></font></td>
      <td width="12%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Longitud del Cable (Km)</b></font></td>
      <td width="13%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Diámetro exterior (mm)</b></font></td>
      <td width="13%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Corriente Admisible (A)</b></font></td>
      <td width="13%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Caida de Tensión (V)</b></font></td>
      <td width="13%" align="center" bgcolor="#FFFFFF" bordercolorlight="#3399FF"><font face="Verdana" color="#FF0000" size="1"><b>Caida de Tensión (%)</b></font></td>
    </tr>
	`
  }
}

var calculate_btn = document.getElementById("calculate");
calculate_btn.onclick = function() {
  var tension = document.getElementById("tension").value;
  var corriente = document.getElementById("corriente").value;
  var longitud = document.getElementById("longitud").value;
  if (tension == "" || corriente == "" || longitud == ""){
    alert("Por favor complete todos los campos.");
	return;
  }
  calculate();
  change_view(1);
}

var return_btn = document.getElementById("returntocalc");
return_btn.onclick = function() {
  change_view(2);
}


// Botones de banner
var popupimg = document.getElementById("popupimage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var tablero1 = document.getElementById("tablero1");
var tablero2 = document.getElementById("tablero2");
var tablero3 = document.getElementById("tablero3");
var tablero4 = document.getElementById("tablero4");
var image = document.getElementById("img");
var captionText = document.getElementById("caption");
tablero1.onclick = function(){
  popupimg.style.display = "block";
  image.src = "img/MUESTRARIO-DE-MN-1.JPG";
  captionText.innerHTML = this.alt;
}
tablero2.onclick = function(){
  popupimg.style.display = "block";
  image.src = "img/MUESTRARIO-DISTRI-2.JPG";
  captionText.innerHTML = this.alt;
}
tablero3.onclick = function(){
  popupimg.style.display = "block";
  image.src = "img/MUESTRARIO-DISTRI-3.JPG";
  captionText.innerHTML = this.alt;
}
tablero4.onclick = function(){
  popupimg.style.display = "block";
  image.src = "img/MUESTRARIO-DISTRI-4.JPG";
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeimg")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popupimg.style.display = "none";
}
