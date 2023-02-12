# README

* Ruby 3.1.2

* PostgreSQL 14.5

* Tailwind

* pdfjs_viewer-rails gem for PDF reader
 - PDF files must be registered in app/assets/config/manifest.js for pre-compilation

* Database creation
	only Users for now

* Database initialization
	no seed file yet

* Deployment instructions
	not ready for production yet
	test and prod environments still require devise mailer information

* Getting started

	environments/development.rb
	 config.assets.debug = true
	
	bundle install
	rails db:migrate
	rake assets:clean
	rake assets:precompile
	bin/dev

