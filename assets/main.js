const shareButton = document.querySelector(".button-share");
const shareIconGrey = document.getElementById("share-icon-grey");
const shareIconWhite = document.getElementById("share-icon-white");
const toast = document.querySelector(".toast-box");
const mainContainer = document.querySelector(".container");

function openToast(e) {
  if (!shareButton.classList.contains("active")) e.stopPropagation();
  shareButton.classList.add("active");
  shareIconWhite.classList.remove("hidden");
  shareIconGrey.classList.add("hidden");
  toast.classList.remove("hidden");
}

function closeToast() {
  if (shareButton.classList.contains("active")) {
    shareButton.classList.remove("active");
    shareIconGrey.classList.remove("hidden");
    shareIconWhite.classList.add("hidden");
    toast.classList.add("hidden");
  }
}

shareButton.addEventListener("click", openToast);

mainContainer.addEventListener("click", closeToast);
