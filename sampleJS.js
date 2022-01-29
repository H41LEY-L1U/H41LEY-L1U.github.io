function greet(firstName){
    alert("Nice to meet you, from " + firstName);
}
function conditional(){
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10){
        alert("Good morning!");
    }   else if (currentHour < 18){
        alert("Good day!");
    }   else{
        alert("Good evening!");
    }
}

function evalNumber(){
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)){
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is a even number.")
    } else {
        alert(inputValue + " is an odd number")
    }
}

function changeTitle(){
    let selectedElement = document.getElementById("biaoTi");
    selectedElement.innerText = "Title Changed";
}

//date
function seeDate(){
    document.getElementById('abcd').style.display='block';
    var D = new Date();
    let iiii = document.getElementById("abcd");
    iiii.innerText = D.getMinutes();
}

function seeNoTime(){
    document.getElementById('abcd').style.display='none';
}

//Map API example
function mapLoad(){
    var latLng = [41.789649, -87.599702];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
   
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }