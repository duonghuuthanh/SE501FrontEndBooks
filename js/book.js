function openRegisterModal(obj) {
    let id = obj.getAttribute('rel')
    let e = document.getElementById(id);
    e.classList.remove('modal-hide');
    e.classList.add('modal-show');
    // e.style.visibility = 'visible'; 
    // e.style.opacity = 1;
}

function closeModal(obj) {
    let id = obj.getAttribute('rel')
    let e = document.getElementById(id);
    e.classList.remove('modal-show');
    e.classList.add('modal-hide');
    // e.style.visibility = 'hidden'; 
    // e.style.opacity = 0;
}

let inputs = document.querySelectorAll('.modal-content input');
for (let inp of inputs)
    inp.addEventListener('blur', function() {
        if (!this.value || this.value === '') {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }

    });