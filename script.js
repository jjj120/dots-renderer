function generateDots() {
    const canvas = document.getElementById('canvas');
    const numDots = parseInt(document.getElementById('numDots').value);
    const dotSize = parseInt(document.getElementById('dotSize').value);

    // Clear previous dots
    canvas.innerHTML = '';

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        // Random positions
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;

        // Apply styles
        dot.style.position = 'absolute';
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.backgroundColor = 'white';
        dot.style.borderRadius = '50%';
        dot.style.left = `${xPos}%`;
        dot.style.top = `${yPos}%`;

        canvas.appendChild(dot);
    }

    changeDotsSize();
    changeCanvasSize();
    changeBg();
}

function changeDotsSize() {
    const canvas = document.getElementById('canvas');
    const dotSize = parseInt(document.getElementById('dotSize').value);

    const dots = canvas.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.width = `${dotSize}px`;
        dots[i].style.height = `${dotSize}px`;
    }
}

function changeCanvasSize() {
    const canvas = document.getElementById('canvas');
    const canvasSize = parseInt(document.getElementById('canvasSize').value);
    
    canvas.style.width = `${canvasSize}vw`;
    canvas.style.height = `${canvasSize}vh`;
    canvas.style.top = `calc(50vh - ${canvasSize / 2}vh)`;
    canvas.style.left = `calc(50vw - ${canvasSize / 2}vw)`;
}

function changeBg() {
    const bg = document.getElementById('background');
    const color = document.getElementById('bgColor').value;

    bg.style.backgroundColor = color;
}


generateDots();