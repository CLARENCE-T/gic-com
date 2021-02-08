class PagesController < ApplicationController
  def index
    @logos = Logo.all
    @showroom = Picture.where(showroom: true)
  end
end
