let pname = document.getElementById('pname');
let pdescription = document.getElementById('pdescription');
let pcatagory = document.getElementById('pcatagory');
let pPrice = document.getElementById('pPrice');

const button = document.getElementById('btn');

const cardbody = document.querySelector("#cards-container");

button.addEventListener('click', () => {
    
    let data = JSON.parse(localStorage.getItem('cards')) || [];
    
    data.push({
        pname: pname.value,
        pdescription: pdescription.value,
        pcatagory: pcatagory.value,
        pPrice: pPrice.value,
    });

    localStorage.setItem('cards',JSON.stringify(data))

});


