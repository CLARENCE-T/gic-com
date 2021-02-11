class PagesController < ApplicationController
  def index
    @logos = Logo.all
    @showroom = Picture.where(showroom: true)
    @contact = Contact.new
  end
end
