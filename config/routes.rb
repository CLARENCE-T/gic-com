Rails.application.routes.draw do
  get 'validations/index'
  # get 'pictures/index'
  # get 'pictures/show'
  # get 'contacts/index'
  # get 'contacts/new'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # get 'contact/index'
  # get 'talents/index'
  # get 'pages/index'

  root to: 'pages#index'

  resources :pages, only: [:show, :index] do
    resources :contacts, path: "contact", only: [:new, :create]
  end

  resources :events, path: "evenements", only: [:index, :show] do
    resources :pictures, path: "album", only: [:index, :show]
  end

  resources :talents, only: [:index, :show]
  resources :contacts
end
