window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let size = 50;
    let step = 5;
    let x = 0;
    let y = 200;

    function draw() {
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(x, y, size, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();

        size += step;
        if (size >= 150 || size <= 50) {
            step *= -1;
        }

        x += 10;
        if (x >= 600) {
            x = 0
        }
    }
    setInterval(draw, 100);
}