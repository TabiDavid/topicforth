function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        
        document.getElementById("demo").innerHTML = " Currency: " + result.euro.nombre + "<br>" + "Compare value with: " + result.euro.unidad_medida + "<br>" + " Date: " + result.euro.fecha + 
        "<br>" + "Value: " + result.euro.valor;
  
        document.getElementById("demo2").innerHTML = " Currency: " + result.dolar.nombre + "<br>" + "Compare value with: " + result.dolar.unidad_medida + "<br>" + " Date: " + result.dolar.fecha + 
        "<br>" + "Value: " + result.dolar.valor;
     
        document.getElementById("demo3").innerHTML = " Currency: " + result.bitcoin.nombre + "<br>" + "Compare value with: " + result.bitcoin.unidad_medida + "<br>" + " Date: " + result.bitcoin.fecha + 
        "<br>" + "Value: " + result.bitcoin.valor;

    }
};
xhttp.open("GET", "https://mindicador.cl/api", true);
xhttp.send();
}
