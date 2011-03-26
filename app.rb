require 'sinatra'
require 'lib/pony_gmail'

enable :static
set :public, File.join(File.dirname(__FILE__), 'public')

post '/stories' do
  Pony.mail(:to=>'',
            :from => '',
            :subject=> "[otvorenysoftver.sk] #{params[:name]}",
            :body => "\n#{params[:body]}\n\n---\nOdosielatel: #{params[:email]}",
            :via_options => {
              :address => 'smtp.gmail.com',
              :port => '587',
              :user_name => '',
              :password => '',
              :authentication => :plain,
              :domain => ''
             })
   "Ďakujeme Vám! Vaša žiadosť o pridanie bola odoslaná na posúdenie v prípade zverejnenia,
   budete o tomto informovaný mailom na adresu: #{params[:email]}"
end
