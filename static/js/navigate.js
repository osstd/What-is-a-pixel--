document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".grid-container, .grid-container-4").forEach((container) => {
    container.querySelectorAll(".grid-item").forEach((item, index) => {
      item.dataset.index = index; // Assigning index to each grid item
      item.addEventListener("click", (event) => {
        const clickedItem = event.target.closest(".grid-item");
        if (!clickedItem) return; // Clicked outside a grid item
        const containerItems = Array.from(
          container.querySelectorAll(".grid-item")
        );
        let fullViewIndex = parseInt(clickedItem.dataset.index); // Update full view index

        // Activate full image mode with clicked item
        activateFullImage(clickedItem);

        // Log all items in the container with their indices
        console.log(
          "All Items:",
          containerItems.map((item) => ({
            text: item.textContent.trim(),
            index: item.dataset.index,
          }))
        );
        console.log(`Index of the image in full view is: ${fullViewIndex}`);

        // Keyboard navigation within the container
        document.addEventListener("keydown", (keyEvent) => {
          if (
            document.querySelector(".full-image-container").style.display ===
            "flex"
          ) {
            const currentIndex = containerItems.findIndex(
              (item) => item.dataset.index === fullViewIndex.toString()
            );
            let newIndex;

            if (keyEvent.key === "ArrowLeft" && currentIndex > 0) {
              newIndex = currentIndex - 1;
            } else if (
              keyEvent.key === "ArrowRight" &&
              currentIndex < containerItems.length - 1
            ) {
              newIndex = currentIndex + 1;
            } else if (keyEvent.key === "Escape") {
              closeFullImage();
            }

            if (newIndex !== undefined) {
              navigateImage(containerItems[newIndex]);
              fullViewIndex = parseInt(containerItems[newIndex].dataset.index); // Update full view index
              keyEvent.preventDefault(); // Prevent default arrow key behavior (scrolling)
            }
          }
        });
      });
    });
  });

  function activateFullImage(clickedItem) {
    const imgSrc = clickedItem.querySelector(".grid-img").src;
    document.getElementById("full-image").src = imgSrc;
    document.querySelector(".full-image-container").style.display = "flex";
  }

  function navigateImage(newItem) {
    const imgSrc = newItem.querySelector(".grid-img").src;
    document.getElementById("full-image").src = imgSrc;
    document
      .querySelector(".full-image-container")
      .setAttribute("data-index", newItem.dataset.index);
  }

  function closeFullImage() {
    document.querySelector(".full-image-container").style.display = "none";
    document
      .querySelector(".full-image-container")
      .removeAttribute("data-index");
    document.getElementById("full-image").src = "";
  }

  document
    .querySelector(".full-image-container")
    .addEventListener("click", () => {
      document.querySelector(".full-image-container").style.display = "none";
    });
});
