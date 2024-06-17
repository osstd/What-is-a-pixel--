document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".grid-container, .grid-container-4")
    .forEach((container) => {
      container.querySelectorAll(".grid-item").forEach((item, index) => {
        item.dataset.index = index;
        item.addEventListener("click", (event) => {
          const clickedItem = event.target.closest(".grid-item");
          if (!clickedItem) return;
          const containerItems = Array.from(
            container.querySelectorAll(".grid-item")
          );
          let fullViewIndex = parseInt(clickedItem.dataset.index);

          activateFullImage(clickedItem);

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
                fullViewIndex = parseInt(
                  containerItems[newIndex].dataset.index
                );
                keyEvent.preventDefault();
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
