source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'simple_form'
gem 'puma', '~> 5.6'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem "breadcrumbs_on_rails"
gem 'rack-cors', :require => 'rack/cors'
gem 'coffee-rails', '~> 4.2'
#gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'webpacker', github: 'rails/webpacker'
gem 'jquery-ui-rails'
gem 'jquery-rails'

#gem 'will_paginate'
#gem 'jquery-ui-themes'
gem "font-awesome-rails"
gem 'bullet', group: 'development'
gem 'rollbar'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'meta_request'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'hirb'
  gem 'faker', :git => 'git://github.com/stympy/faker.git', :branch => 'master'

end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
