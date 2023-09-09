const detailButtons = document.querySelectorAll('.details');
const detailTitle = document.querySelector('.detail-title');
const detailFullName = document.querySelector('.detail-full-name');
const detailRegion = document.querySelector('.detail-region');
const detailPhoneNumber = document.querySelector('.detail-mobile-number');
const detailEmail = document.querySelector('.detail-email');
fetch('http://localhost:3000/api/usersDetails')
    .then(response => response.json())
    .then(data =>{
        detailButtons.forEach((detailButton, index) => {
            detailButton.addEventListener('click', () => {
                detailTitle.innerHTML = `${data[index].nama}`
                detailFullName.innerHTML = `${data[index].nama}`
                detailRegion.innerHTML = `${data[index].region}`
                detailPhoneNumber.innerHTML = `${data[index].nohp}`
                if (data[index].email === ""){
                    detailEmail.innerHTML = `<span class="text-danger">Unknown Data </span>`
                }
                else{
                    detailEmail.innerHTML = `${data[index].email}`
                }
            })
        })
    });

