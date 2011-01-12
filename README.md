# Enliven - the web framework keeping your live site in sync with your designs

This project is licensed under the MIT License. Copyright 2011, Victor1 LLC.

Author is David Bergman, of Victor1 LLC.

## Raionale

The transition from design to coding is often quite painful, where the coders dissect the poor well-designed creature lying on their table, fresh out of a creative mind. A lot of cutting and gluing. Additionally, when design elements need to change, the poor body is sent back to the designer, although now in a zombie-like form, alternatively hacked into pieces, with a lot of code inserted, confusing both designer and her tool.

## Overview

Enliven consists of a library of JavaScript code, acting as glue to the design pages. The *only* prerequisite is that these pages are marked with special CSS classes.

Enliven provides functions to populate lists or individual elements of the design page with live data, provided as a hash or list of hashes. The unique feature is that the existing design is used for the individual element(s), provided as *sample* data.

Alas, *no* HTML snippets is to be found in code using Enliven. A coder should not deal with HTML design, *not even* dissect such design into pieces.

## Goal

The goal is that the designer's deliverables live *completely intact* throughout the lifespan of the system, except for intentional design changes, of course. I want the designer to be able to get back into the HTML (and CSS) files as he left them and change things without having to involve the coder for anything else but redeployments.

Lofty goal? Perhaps, but if solved, Enliven could make lives so much easier for a lot of teams currently suffering from this dichotomy.

There is also a goal of keeping Enliven back end agnostic, although the intention is to provide "plugins" for common back end scenarios, such as CouchDB and Ruby REST services.