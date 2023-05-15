let cont = document.querySelector('#dynamic-container');

function addElement() {
    let el = document.createElement('button');
    el.id = 'created';
    el.className = 'created-element';
    el.textContent = 'Ball :)';

    cont.appendChild(el);
}

function alterElement(){
    let altered_el = document.querySelector('#created');
    altered_el.style.background = 'green';
}

function alterAllElements(){
    let altered_el = document.querySelectorAll('#created');
    
    altered_el.forEach(elem =>{
        elem.style.background = 'yellow';
        elem.style.color = 'black';
    })
}

function deleteElements(){
    let alldynamicElements = document.querySelectorAll('#created');

    alldynamicElements.forEach(elem => {
        elem.style.display = 'none';
    })
}

