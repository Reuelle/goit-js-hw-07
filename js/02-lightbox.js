import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector("ul.gallery");

function createGalleryItem(array) {
    array.map(({preview, original, description}) => {
        return `
        <a class = "gallery__item" href="${original}>
        <img class = "gallery__image" sec = "${preview}" alt = "${description} />
        </a>
        `;
    }) .join("");

}
const photosMarkup = createGalleryItem(galleryItems);
