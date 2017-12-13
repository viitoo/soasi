Rails.application.routes.draw do
  resources :empleados
  resources :empresas do
    get 'getjson'
    resources :pacientes
  end
  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
