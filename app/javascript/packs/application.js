// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
//= require("channels")
//= require ("jquery3")
//= require ("jquery_ujs")
//= require masonry/masonry
//= require_tree .


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import { masonry } from "components/masonry-pictures";
import { masonryEvent } from "components/masonry-event";
import { zoom } from "components/mosaic_zoom";
import  { closePopUp } from "components/close_pop_up";
import { onLoad } from "components/on_load"
import { removeOzero } from "components/remove_o-zero"
import { masonryG } from "components/masonry"
// import { showContent } from "components/show-content"

document.addEventListener('turbolinks:load', () => {
  onLoad(masonry, removeOzero)
  onLoad(masonryEvent, removeOzero)
  zoom()
  closePopUp()
  masonryG()
  // showContent()
});






