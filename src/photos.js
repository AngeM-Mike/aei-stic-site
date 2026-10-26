/*
  Photos détectées automatiquement.
  Déposez une image dans src/assets/photos/ en la nommant comme l’identifiant du cadre
  (ex. hero.jpg, je-banner.webp, act-2026-10-01.png). La liste des identifiants est dans le README.
  Sans fichier, le cadre garde son emplacement en pointillés.
*/
const files = import.meta.glob("./assets/photos/*.{jpg,jpeg,png,webp,avif}", { eager: true, query: "?url", import: "default" });

export const PHOTOS = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), url])
);
