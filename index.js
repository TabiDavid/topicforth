//console.log('active');

document.querySelector("#button").addEventListener("click", bringdata);

function bringdata(){

    //console.log("function active");

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200){

    //var myArr = JSON.parse(this.responseText);
    //myFunction(myArr);

    //console.log(this.responseText);
    document.querySelector("#answer").innerHTML = this.responseText;

}

    }
}