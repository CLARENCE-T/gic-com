class EventsController < ApplicationController
  def index
    @events = Event.friendly.order("RANDOM()").all
  end

  # def show
  #   @event = Event.find(params[:id])
  # end

  # private
  # def event_params
  #   params.require(:event).permit(:id, :description)
  # end
end
