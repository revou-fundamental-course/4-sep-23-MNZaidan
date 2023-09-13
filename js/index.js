
const navLinks = document.querySelectorAll('.nav-links a');
function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});



document.getElementById('hitung keliling').onclick = function () {
    const length = parseFloat(document.getElementById("sisi keliling").value);
        const perimeter = 4 * length;
        document.getElementById("hasil keliling").innerHTML = `K = 4 × S<br>K = 4 × ${length}<br>Keliling = ${perimeter}`;
}

document.getElementById('hitung luas').onclick = function () {
    const length = parseFloat(document.getElementById("sisi luas").value);
    const area = length * length;
    document.getElementById("hasil luas").innerHTML = `L = S × S<br>L = ${length} × ${length}<br>Luas = ${area}`;
    
}