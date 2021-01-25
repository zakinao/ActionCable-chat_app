Rails.application.routes.draw do
  root 'rooms#index'
  resources :chats
end
