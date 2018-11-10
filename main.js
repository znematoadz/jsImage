const inputs = document.querySelectorAll('.controls input');


function handleUpdate(e) {
    
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    e.target.nextElementSibling.innerHTML = this.value + suffix;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function inputImage() {
    let inputValue;

    inputValue = document.getElementById("imageInput").value;
    
    document.getElementById("mainImg").setAttribute("src", inputValue)
    
    
}