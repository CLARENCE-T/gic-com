class PagesController < ApplicationController
  def index
    @logos = Logo.all
  end
end
