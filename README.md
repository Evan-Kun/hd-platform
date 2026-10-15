# HD Progression Modelling, published site

This repository holds only the built, static output of the HD Progression Modelling site. Its `main` branch is written by the `publish` workflow of the source repository, `hd-platform-source`, on every push to that repository's `main` that touches the site, after lint, types, unit tests, build and the governance scan pass; a ruleset blocks pushes by hand. Each commit names the source commit it was built from. Do not edit or push here: make the change in the source repository and merge it to `main`.

Live site: https://evan-kun.github.io/hd-platform/

Browser-based research demonstrations of published Huntington's disease machine-learning models from the Nellie Georgiou-Karistianis Lab, Turner Institute for Brain and Mental Health, Monash University. Everything runs in the visitor's browser; no cohort data is in this repository.
