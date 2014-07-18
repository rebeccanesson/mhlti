# Gemfile
require "rubygems"
require "bundler/setup"
require "sinatra"
require "haml"
require "./app.rb"
require 'ims/lti'
require 'oauth/request_proxy/rack_request'
OAUTH_10_SUPPORT = true

set :run, false
set :raise_errors, true

run Sinatra::Application
