import { posts } from './post.js';

export function carousel() {
  let crsl = posts.post
    .map(
      (p) => `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${p.pet_img}" alt="Mascota 1">
                  <div class="card-body">
                    <h2 class="card-title">${p.pet_name}</h2>
                    <p>Contacto: 123-456-7890</p>
                  </div>
              </div>`
    )
    .join('');

  return crsl;
}
