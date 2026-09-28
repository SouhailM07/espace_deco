# SEO Deployment & Validation Checklist - Espace Deco

Ce document décrit les étapes pour valider et déployer les optimisations SEO, ainsi que la configuration sur Google Search Console.

## 1. Configuration du Domaine de Production

Avant le passage en production, assurez-vous de :
- [ ] Remplacer la variable d'environnement (ou le domaine par défaut) par le vrai domaine dans `app/sitemap.ts` et `app/robots.ts` (ex: `https://www.espacedeco.dz`).
- [ ] Vérifier que le protocole `https://` est forcé côté serveur/hébergeur.
- [ ] Mettre à jour les URLs absolues dans les balises `OpenGraph` et `Twitter` via le composant Metadata.

## 2. Configuration Google Search Console (GSC)

Dès la mise en ligne du domaine officiel :
- [ ] Créer une propriété "Préfixe de l'URL" (ou Domaine) dans [Google Search Console](https://search.google.com/search-console).
- [ ] Valider la propriété (via enregistrement DNS ou balise meta).
- [ ] Naviguer vers l'onglet **Sitemaps** et soumettre l'URL du sitemap : `https://www.votre-domaine.com/sitemap.xml`.
- [ ] Vérifier que GSC affiche le statut "Opérationnel" (Success) pour le sitemap.

## 3. Validation Technique Post-Déploiement

Utilisez les outils suivants pour vérifier le bon fonctionnement du SEO :
- [ ] **robots.txt :** Visiter `https://www.votre-domaine.com/robots.txt`. Vérifier qu'aucune page importante n'est bloquée.
- [ ] **sitemap.xml :** Visiter `https://www.votre-domaine.com/sitemap.xml`. Vérifier que toutes les URLs sont absolues et correctes.
- [ ] **Validation des Données Structurées :** Utiliser le [Rich Results Test de Google](https://search.google.com/test/rich-results) sur la page d'accueil pour tester le composant `LocalBusiness` et sur les projets pour tester `BreadcrumbList`.
- [ ] **Inspection d'URL :** Utiliser l'outil d'inspection dans GSC pour vérifier comment Googlebot rend la page d'accueil et les projets.
- [ ] **Balises Meta :** Vérifier que les balises `title`, `description`, `canonical`, et `og:image` sont présentes dans le code source de chaque page.

## 4. Bonnes Pratiques Continues
- **Nouveaux Projets :** À chaque ajout de projet, assurez-vous que les images soient optimisées, qu'elles contiennent des attributs `alt` pertinents, et que le slug URL soit descriptif.
- **Mise à jour du sitemap :** Si le site est statique, s'assurer que le processus de build génère un `sitemap.xml` à jour contenant les nouveaux projets.
- **Surveillance :** Consulter GSC mensuellement pour corriger les potentielles erreurs 404, de couverture ou de Core Web Vitals.
