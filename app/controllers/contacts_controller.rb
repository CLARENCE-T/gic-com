class ContactsController < ApplicationController
  def index
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to new_contact_path, notice: 'User was successfully created.'
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:mail)
  end
end
