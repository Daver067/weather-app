import { allImages } from "./images";

function changeBackground(code) {
  const body = document.querySelector(".imgWrapper");
  if (code > 199 && code < 299) {
    body.style.backgroundImage = `url(${allImages.thunderstorm})`;
  }
  if (code > 299 && code < 499) {
    body.style.backgroundImage = `url(${allImages.rain})`;
  }
  if (code > 599 && code < 699) {
    body.style.backgroundImage = `url(${allImages.snow})`;
  }
  if (code > 699 && code < 799) {
    body.style.backgroundImage = `url(${allImages.fog})`;
  }
  if (code > 799 && code <= 802) {
    body.style.backgroundImage = `url(${allImages.sun})`;
  }
  if (code > 802) {
    body.style.backgroundImage = `url(${allImages.cloud})`;
  }
}

export { changeBackground };
