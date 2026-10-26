# AEI STIC — site vitrine (maquette React)

## Ouvrir sans rien installer
Double-cliquez sur `maquette-autonome.html` : la maquette s’ouvre dans le navigateur (connexion internet requise pour les polices et React).

## Lancer le projet
Prérequis : Node.js 18 ou plus.

```bash
npm install
npm run dev      # ouvre http://localhost:5173
npm run build    # version à déployer dans le dossier dist/
```

## Ajouter les photos
Déposez l’image dans `src/assets/photos/` et **nommez le fichier comme l’identifiant du cadre** (jpg, png, webp ou avif).
Exemple : `src/assets/photos/hero.jpg`. Rien d’autre à modifier : la photo remplace l’illustration de l’emplacement.
Les identifiants et ratios conseillés sont listés ci-dessous.
La photo d’une activité sert aussi de couverture à son article (recadrée en 16:9).

| Identifiant | Ratio conseillé | Où |
| --- | --- | --- |
| `hero` | 4:5 | Accueil, grande photo à droite du titre |
| `logo-aei-stic, logo-esi, logo-inp-hb, logo-inova, logo-mis, logo-up-pro` | Variable (logo) | Accueil, bande « Notre écosystème » |
| `band` | 16:9 | Accueil, grande photo de fond derrière les 3 cartes |
| `mission` | 4:5 | Accueil, carte « Notre mission » |
| `accueil-stic` | 3:4 | Accueil, carte La STIC |
| `accueil-je` | 3:4 | Accueil, carte Junior Entreprise |
| `accueil-asso` | 3:4 | Accueil, carte Associations |
| `accueil-act` | 3:4 | Accueil, carte Activités |
| `stic-info-1 / stic-tele-1 / stic-eit-1` | 1:1 (vertical) | Page STIC, grande photo de la mosaïque (un jeu par domaine) |
| `stic-info-2 / stic-tele-2 / stic-eit-2` | 2:1 | Page STIC, mosaïque, photo du haut |
| `stic-info-3 / stic-tele-3 / stic-eit-3` | 2:1 | Page STIC, mosaïque, photo du bas |
| `mission-projets` | 4:3 | Page STIC, axe « Valoriser les projets » |
| `mission-talents` | 4:3 | Page STIC, axe « Valoriser les talents » |
| `mission-com` | 4:3 | Page STIC, axe « Communiquer » |
| `je-banner` | 21:9 | Page JE, bannière large |
| `je-pole-1 à je-pole-4` | 4:3 | Page JE, une photo par pôle (Développement, Télécom et Réseau, Marketing, Montage et graphisme) |
| `asso-1, asso-2, asso-3` | 4:3 | Page Associations, cartes |
| `asso-detail-1, asso-detail-2, asso-detail-3` | 16:10 | Page Associations, photo du détail |
| `asso-1-membre-1` à `asso-1-membre-5` | 4:5 | Page Associations, portraits du bureau MIS |
| `asso-2-membre-1` à `asso-2-membre-5` | 4:5 | Page Associations, portraits du bureau Spécialité 2 |
| `asso-3-membre-1` à `asso-3-membre-5` | 4:5 | Page Associations, portraits du bureau Spécialité 3 |
| `act-2025-09-01` | 4:3 | Message de rentrée |
| `act-2025-09-26` | 4:3 | Portrait de Roméo Bomisso |
| `act-2025-10-01` | 4:3 | Focus sur la STIC |
| `act-2025-10-21` | 4:3 | UP-PRO |
| `act-2026-01-01` | 4:3 | Message de nouvelle année |
| `act-2026-09-05` | 4:3 | Journée d’intégration ESI |
| `act-2026-10-01` | 4:3 | Octobre Rose |

## Où modifier le reste
| Fichier | Contenu |
| --- | --- |
| `src/pages/Home.jsx` | Page d’accueil |
| `src/pages/Stic.jsx` | La STIC et l’AEI-STIC |
| `src/pages/JE.jsx` | Junior Entreprise (pôles, étapes) |
| `src/pages/Asso.jsx` | Associations de spécialité |
| `src/pages/Activites.jsx` | Activités et fenêtre d’article |
| `src/data.js` | Menu, activités (`ACTIVITES`), associations (`ASSOS`), domaines (`DOMAINS`), écosystème (`ECO`), textes des articles (`ART`) |
| `src/components/Footer.jsx` | Adresse, téléphone, email, réseaux : **valeurs d’exemple à remplacer** |
| `src/components/ui.jsx` | Composants communs (cadre photo, animations d’apparition, compteurs) |
| `src/styles.css` | Couleurs (variables en haut du fichier), typographie, mise en page |
| `src/assets/logo.webp` | Logo |

Les textes marqués « provisoire » (pôles de la JE, étapes d’une mission, associations d’exemple, articles) sont à valider par l’association.
