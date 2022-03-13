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

function evalNumberTernary() {

    var inputValue = parseInt(prompt("Enter any five-digit integer without commas"));
        isNaN(inputValue) || inputValue > 99999 || inputValue < 10000 || !(Number.isInteger(inputValue)) ? 
        alert(inputValue + " is not a valid 5-digit number.") :
        inputValue % 2 == 0 ?
        alert(`${inputValue} is an even number.`) :
        alert(`${inputValue} is an odd number.`)
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

//lastItem
function lastItem() {
  var arr1 = ['Watermelon', 'Apple', 'Orange', 'Kiwi', 'Zfruit', 'CFruit'];
  alert(arr1);
  alert(alphabeticalOrder(arr1)[arr1.length-1]);
}

function alphabeticalOrder(arr) {
    return arr.sort((a, b) => a < b ? -1 : 1)
  }

//fourStringSort
function sortItems(){
  var arr2 = [];
  var arr3 = ['fruit', 'animal', 'state', 'country'];
  for(var i = 0; i < 4; i++){
     arr2.push(prompt("Enter a " + arr3[i] + " name: "));
  }
  alert(arr2);
  alert(alphabeticalOrder(arr2));
}


function parseArray(){
  var arr = [];
  for(var i = 1; i < 11; i++){
     arr.push(prompt("Enter a number for the #"+ i +" (total 10) time : "));
  }
  alert("Sorted: "+ arr.sort());
}

//Wiki API
async function handleSubmit(event) {
    event.preventDefault();
    const inputValue = document.querySelector('.js-search-input').value;
    const searchQuery = inputValue.trim();
  
    const searchResults = document.querySelector('.js-search-results');
    searchResults.innerHTML = '';
  
    const spinner = document.querySelector('.js-spinner');
    spinner.classList.remove('hidden');
  
    try {
      const results = await searchWikipedia(searchQuery);
      if (results.query.searchinfo.totalhits === 0) {
        alert('No results found. Try different keywords');
        return;
      }
  
      displayResults(results);
    } catch (err) {
      console.log(err);
      alert('Failed to search wikipedia');
    } finally {
      spinner.classList.add('hidden');
    }
  }
  
  async function searchWikipedia(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  }
  
  function displayResults(results) {
    const searchResults = document.querySelector('.js-search-results');
  
    results.query.search.forEach(result => {
      const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
  
      searchResults.insertAdjacentHTML(
        'beforeend',
        `<div class="result-item">
          <h3 class="result-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
          <span class="result-snippet">${result.snippet}</span><br>
        </div>`
      );
    });
  }
  
//OCHRE API
var parentElement = document.getElementById('ochreTableBody');
var url = 'https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300'



function loadXML(){
  XMLrequest(url);
  console.log('loadXML -- ok');
};

function XMLrequest(link){
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      listTexts(this.responseXML);
    };
  };
  connect.open('GET', link, true);
  connect.send();
  console.log('XML request -- ok');
}

function listTexts(sourceXML){
  document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
  document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].innerHTML;
  document.getElementById('setDescription').innerText = sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
  var licenseText = document.getElementById('license');
  licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
  licenseText.setAttribute('herf', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);

  console.log(sourceXML);
  var textList = sourceXML.getElementsByTagName('text');
  console.log(textList);
  for (i=0; i < textList.length; i++){
    var tr = document.createElement('tr');
    tr.setAttribute('class', 'ochreTableRows');
    tr.setAttribute('id', 'row_'+i);
    document.getElementById('ochreTableBody').appendChild(tr);
    var td = document.createElement('td');
    td.setAttribute('id', 'td_name_'+i);
    td.textContent = textList[i].children[0].children[0].innerHTML;
    document.getElementById('row_'+i).appendChild(td);
    var td2 = document.createElement('td');
    td2.setAttribute('id', 'td_desc_'+i);
    td2.textContent = textList[i].children[3].innerHTML;
    document.getElementById('row_'+i).appendChild(td2);
  }
}


//Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("button01");
    btn1.addEventListener('click', evalNumberTernary);

    const btn2 = document.querySelector("#button02");
    btn2.addEventListener('click', changeTitle);

    const btn3 = document.querySelector("#button03");
    btn3.addEventListener('click', seeDate);

    const btn4 = document.querySelector("#button04");
    btn4.addEventListener('click', seeNoTime);

    const btn5 = document.getElementById("button05");
    btn5.addEventListener('click', parseArray);

    const btn6 = document.getElementById("button06");
    btn6.addEventListener('click', lastItem);

    const btn7 = document.getElementById("button07");
    btn7.addEventListener('click', sortItems);


})