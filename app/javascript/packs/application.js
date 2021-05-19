
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()

import { zoom } from "components/mosaic_zoom";
import  { closePopUp } from "components/close_pop_up";
import { onLoad } from "components/on_load"
import { removeOzero } from "components/remove_o-zero"
import { masonryShowroom } from "components/masonry_showroom"
import { masonryEvent } from "components/masonry-event";
import { masonryPictures } from "components/masonry_pictures"
import { descriptionMaker } from "components/description_maker"
import { descriptionMakerShowroom } from "components/description_maker_showroom"

document.addEventListener('turbolinks:load', () => {
  onLoad(masonryEvent, removeOzero)
  onLoad(masonryPictures, removeOzero, descriptionMaker)
  onLoad(masonryShowroom, removeOzero, descriptionMakerShowroom)
  zoom()
  closePopUp()
});






