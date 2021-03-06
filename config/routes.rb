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
  get '.well-known/pki-validation/', to: 'validations#index'

  root to: 'pages#index'

  resources :pages, only: [:show, :index] do
    resources :contacts, only: [:new, :create]
  end

  resources :events, only: [:index, :show] do
    resources :pictures, only: [:index, :show]
  end

  resources :talents, only: [:index, :show]
  resources :contacts
end
