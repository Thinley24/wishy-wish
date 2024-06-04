const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const text = document.querySelector(".text");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
    text.classList.add("active");
    text.classList.remove("deactivate");

    // Trigger confetti effect after text has fully emerged
    const textTransitionEnd = () => {
      if (text.classList.contains("active")) {
        confetti({
          particleCount: 2000, // Adjust this value to change the density
          spread: 360,
          origin: { y: 0.6 },
        });
        // Clean up the event listener once it's no longer needed
        text.removeEventListener("transitionend", textTransitionEnd);

        // Show the balloons
        const balloons = document.querySelectorAll(".balloon");
        balloons.forEach((balloon) => {
          balloon.style.display = "block"; // Or remove the inline style that sets display to none
        });

        // Toggle the message visibility
        const messageBackground = document.getElementById("messageBackground");
        if (
          messageBackground.style.display === "none" ||
          messageBackground.style.display === ""
        ) {
          messageBackground.style.display = "block"; // Or 'flex' depending on your layout
        } else {
          messageBackground.style.display = "none";
        }
      }
    };
    text.addEventListener("transitionend", textTransitionEnd);
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    text.classList.remove("active");
    text.classList.add("deactivate");

    // Hide the balloons
    const balloons = document.querySelectorAll(".balloon");
    balloons.forEach((balloon) => {
      balloon.style.display = "none"; // Or set the inline style that sets display to none
    });

    // Hide the message
    const messageBackground = document.getElementById("messageBackground");
    messageBackground.style.display = "none";
  }
});
