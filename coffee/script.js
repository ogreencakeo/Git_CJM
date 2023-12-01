document.addEventListener("DOMContentLoaded", function () {
    const imageWrapper = document.getElementById("imageWrapper");
    const images = [
        "./image1.jpg", // Example image URL 1
        "./image2.jpg", // Example image URL 2
        "./image3.jpg", // Example image URL 3
        // Add more image URLs as needed
    ];

    function createMouseBox(x, y, imageUrl) {
        const mouseBox = document.createElement("div");
        mouseBox.className = "mouseBox";
        mouseBox.style.left = x + "px";
        mouseBox.style.top = y + "px";
        mouseBox.innerHTML = `<img class="lazyloaded" src="${imageUrl}">`;
        imageWrapper.appendChild(mouseBox);

        // Automatically remove the mouse box after 5 seconds
        setTimeout(() => {
            mouseBox.style.opacity = 0;
            setTimeout(() => {
                mouseBox.remove();
            }, 200);
        }, 1000);

        return mouseBox;
    }

    let canShowImage = true;

    imageWrapper.addEventListener("mousemove", function (event) {
        if (canShowImage) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            createMouseBox(mouseX, mouseY, images[Math.floor(Math.random() * images.length)]);

            canShowImage = false;
            setTimeout(() => {
                canShowImage = true;
            }, 100); // Set the interval to 1 second
        }
    });
});
