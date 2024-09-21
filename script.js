const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar'); // Make sure 'navbar' is the correct ID

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Use toggle to add/remove 'active' class
    });
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}