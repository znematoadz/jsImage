const inputs = document.querySelectorAll('.controls input');


function handleUpdate(e) {
    
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    e.target.nextElementSibling.innerHTML = this.value + suffix;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function inputImage() {

    let inputValue = document.getElementById("imageInput").value;
    
    document.getElementById("mainImg").setAttribute("src", inputValue)
    
    
}

function toggleMode() {
    
    const color = ["bg-dark", "bg-primary","bg-light", "bg-danger", "bg-sucess", "bg-secondary", "bg-info"];
    const bodyElement = document.getElementById('body');
    const toggleBtn = document.getElementById('toggle');

    const currentClass = color.filter(item => {if(item == bodyElement.classList) return item } );
    const colorIndex = color.indexOf(currentClass[0]);
    bodyElement.classList == color[colorIndex] ? bodyElement.classList.replace(color[colorIndex], color[colorIndex + 1]) : bodyElement.classList.replace(undefined, color[0]);

    
}