const noBtn = document.getElementById("noBtn");
const buttonsDiv = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", () => {
    const containerWidth = buttonsDiv.offsetWidth;
    const containerHeight = buttonsDiv.offsetHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const newLeft = Math.random() * (containerWidth - btnWidth);
    const newTop = Math.random() * (containerHeight - btnHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
});

yesBtn.addEventListener("click", () => {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="message-box">
            <h1>This is for my beautiful cowboy:</h1>
            <img src="images/us.jpeg" alt="I love you" id="img">
            <p>
                Among the millions of strangers in the world,<br>
                thank you for becoming "the one",<br>
                the only one I love, the only one I want as a partner,<br>
                the only that I want causing me headaches,<br>
                the only one who inspires patience,<br> 
                and consumes it in the blink of an eye,<br>
                the only one who makes life more beautiful,<br> 
                with his presence by my side.<br>
                Because all of that... I love you mi amor ❤️
            </p>
        </div>
    `;
});