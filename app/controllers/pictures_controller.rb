class PicturesController < ApplicationController
  def index
    @event = Event.friendly.find(params[:event_id])
    @pictures = Event.friendly.find(params[:event_id]).pictures.order(classement: :asc)
  end

  def show
    @event = Event.friendly.find(params[:event_id])
  end
end
