Rails.application.routes.draw do
  get 'pictures/index'
  get 'pictures/show'
  get 'contacts/index'
  get 'contacts/new'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'contact/index'
  get 'talents/index'
  get 'pages/index'
  get 'events/index'

  root to: 'pages#index'

  resources :pages, only: [:show, :index]

  resources :events, only: [:index, :show] do
    resources :pictures, only: [:index, :show]
  end

  resources :talents, only: [:index, :show]
  resources :contacts
end
