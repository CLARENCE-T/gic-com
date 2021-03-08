class PicturesController < ApplicationController
  def index
    @event = Event.find(params[:event_id])
    @pictures = Event.find(params[:event_id]).pictures.order(classement: :asc)
  end

  def show
    @event = Event.find(params[:event_id])

  end
end
