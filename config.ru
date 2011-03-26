require 'rubygems'
require 'bundler'
$:.unshift File.join(File.dirname(__FILE__), '.')
require 'app.rb'

run Sinatra::Application
