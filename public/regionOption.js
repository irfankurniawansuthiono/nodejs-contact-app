
const select = document.querySelector('#region-input');
fetch('http://localhost:3000/api/COUNTRY')
    .then(response => response.json())
    .then(response => {
        response.map((data)=>{
            let country = data.country;
            select.innerHTML += `<option value="${country}">${country}</option>`;
        })
    })