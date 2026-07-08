# Placeholder Image Sources

These files are placeholder visuals for the Maanshan Lijian Food Blades Factory website prototype. They are not real photos from the factory and should be replaced with confirmed factory and product photos before final launch.

## Downloaded Sources

- `factory-cnc.jpg`: Unsplash search result for CNC machining / metalworking photos, downloaded from `images.unsplash.com`.
- `unsplash-slicer-berkel.jpg`: Unsplash photo `OwRFe3W2UeU`, food slicer equipment, cropped to avoid the visible brand area in generated derivatives.
- `unsplash-industrial-kitchen-steam.jpg`: Unsplash photo from the industrial kitchen search result, used as a food equipment environment placeholder.
- `unsplash-knife-black-surface.jpg`: Unsplash knife close-up, used as a generic blade texture placeholder.
- `../lijian/hero-food-processing-line.jpg`: Pexels photo "Efficient fruit processing on conveyor belts", used for the homepage food production line carousel slide.
- `../lijian/hero-cnc-machining.jpg`: Unsplash photo by Visax, CNC machining / metal cutting, used for the homepage machining capability carousel slide.

License references:

- https://unsplash.com/license
- https://www.pexels.com/license/

Source pages:

- https://www.pexels.com/photo/efficient-fruit-processing-on-conveyor-belts-32578355/
- https://unsplash.com/photos/a-machine-that-is-cutting-a-piece-of-metal-sxtClAGwRck

## Generated Local Derivatives

- `photo-hero-factory.jpg`
- `photo-manufacturing-cnc.jpg`
- `photo-quality-inspection.jpg`
- `about-workshop-machining.jpg`
- `about-equipment-slicer.jpg`
- `about-food-workshop-environment.jpg`
- `product-photo-*.jpg`
- `applications/application-*.jpg`

Generated with `scripts/generate-photo-placeholders.mjs` from the downloaded sources above. The product images are photo-only crops from real stock photography. They do not include drawn blade overlays.

## Replacement Rule

When real factory images are available, keep the same file names if possible:

- Factory / workshop: replace `photo-hero-factory.jpg` and `photo-manufacturing-cnc.jpg`.
- About page: replace `about-workshop-machining.jpg`, `about-equipment-slicer.jpg`, and `about-food-workshop-environment.jpg`.
- Application pages: replace files in `applications/application-*.jpg` with real production line photos when available.
- Quality inspection: replace `photo-quality-inspection.jpg`.
- Product categories: replace the matching `product-photo-*.jpg` file.
