window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let x = 0;
    let y = 100;

    function draw() {
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = 'red';
        context.fill();

        x += 10;
        if (x >= 600) {
            x = 0
        }
    }

    setInterval(draw, 50)
}