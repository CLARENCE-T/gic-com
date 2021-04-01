class PagesController < ApplicationController
  def index
    @logos = Logo.all
    @showroom = Picture.where(showroom: true).order("RANDOM()")
    @contact = Contact.new
  end
end
