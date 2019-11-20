//console.log('active');

document.querySelector("#button").addEventListener("click", bringdata);

function bringdata(){

    //console.log("function active");

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://mindicador.cl/api/dolar", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200){

    document.querySelector("#answer").innerHTML = this.responseText;

}

    }
}
