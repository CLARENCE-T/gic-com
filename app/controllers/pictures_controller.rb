class PicturesController < ApplicationController
  def index
    @event = Event.find(params[:event_id])
    # @pictures = Pictures.find
  end

  def show
    @event = Event.find(params[:event_id])
  end
end
