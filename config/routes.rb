Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/mission'

  mount PdfjsViewer::Rails::Engine => "/pdfjs", as: 'pdfjs'
end
