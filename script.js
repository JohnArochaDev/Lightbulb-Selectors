let light1 = document.querySelector('#lightbulb1');
let light2 = document.querySelector('#lightbulb2');
let light3 = document.querySelector('#lightbulb3');
let subtitle = document.querySelector('.subtitle')
let count = 0

light1.style.backgroundColor = 'black'
light2.style.backgroundColor = 'black'
light3.style.backgroundColor = 'black'



function toggleLight(light) {
    const currentColor = light.style.backgroundColor;

    count++
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    
    if (currentColor === 'black') {
        light.style.backgroundColor = 'white';
    } else {
        light.style.backgroundColor = 'black';
    }
}

light1.addEventListener('click', () => toggleLight(light1));
light2.addEventListener('click', () => toggleLight(light2));
light3.addEventListener('click', () => toggleLight(light3));