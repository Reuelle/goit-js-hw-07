import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    console.log(item);
let li = `
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`;
gallery.innerHTML += li;
});
document.querySelector('.gallery').onclick = () => {

	basicLightbox.create(`
		<img width="1900" height="1000" src="https://placehold.it/1900x1000">
	`).show()

}
