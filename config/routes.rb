Rails.application.routes.draw do
  get 'contacts/index'
  get 'contacts/new'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'contact/index'
  get 'talents/index'
  get 'pages/index'
  get 'events/index'

  root to: 'pages#index'

  resources :pages
  resources :events
  resources :talents
  resources :contacts
end
