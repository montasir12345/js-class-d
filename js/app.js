document.querySelector('#btn').addEventListener('click', ()=>{
document.documentElement.classList.toggle('dark')
});

localStorage.setItem('mode', 'dark');