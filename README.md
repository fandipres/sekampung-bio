# sekampung-bio

This repo contains the source code for the landing page of Sekampung, an offline-first app that helps people understand their family ties and cultural heritage through clan names (marga), family trees (tarombo), kinship terms (partuturan), and relationship checks based on tradition. It starts with the Batak Toba module, with more ethnic groups planned. This landing page also hosts the versioned data packs the app downloads.

The public site for **Sekampung**, and the home of the app's data, served through GitHub Pages at `https://sekampung.fandipres.my.id`.

| Part | Contents |
|---|---|
| `index.html` | Home page: about the app, information links, contact |
| `guide/`, `about/` | How to use the app, and about Sekampung |
| `privacy-policy/`, `terms-conditions/`, `disclaimer/`, `delete-account/` | Legal and data deletion pages |
| `data-sources/` | References and attribution for the content |
| `data/manifest.json`, `data/batak-toba.json` | Version, SHA-256 checksum, and the module data pack the app downloads |

The app only **downloads** from here; no user data is sent to this site. The pages are generated from the app's own text, and the web pages load Tailwind CSS from its CDN (the app itself has no analytics or trackers).

## License and attribution

Part of the data pack is adapted from Wikipedia (CC BY-SA 4.0) and other references. The full list is on the **Sumber data** page and in the `sumber` field of each entry. The content has been changed from the original sources. The final license of this repo has **not been decided yet** (a CC BY-SA derivative means this pack must also be CC BY-SA 4.0). The Plus Jakarta Sans font is under the SIL Open Font License (`assets/fonts/OFL.txt`).

The content has not yet been fully validated by native speakers or traditional elders. To report a correction: preslystudio@gmail.com.
