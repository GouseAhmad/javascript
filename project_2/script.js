const box = document.querySelectorAll('.box');                          
const body = document.querySelector('body');
const b = document.querySelector('.b');
const reset = b.textContent;
box.forEach((box) =>{
    box.addEventListener('click', function (e) {
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        } 
        else if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        } 
        else if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        } 
        else if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        }
        else if(e.target.id === 'Brown'){
            body.style.backgroundColor = e.target.id
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        } 
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            e.target = location.reload()
            b.innerHTML = `<span>color is changed to ${e.target.id} </span>`
        }             
    })
})