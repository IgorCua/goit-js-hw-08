import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

document.querySelector('.gallery').insertAdjacentHTML('afterbegin', markup());

function markup(){
    return galleryItems.map((element) =>{
        const {preview, original, description} = element;

        return `<li class="gallery__item"
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            title="${description}"
                        />
                    </a>
                </li>`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery li', {
    captionSelector: 'img',
    captionDelay: 250
});