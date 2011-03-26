require 'sinatra'
require 'lib/pony_gmail'

enable :static
set :public, File.join(File.dirname(__FILE__), 'public')

post '/stories' do
  Pony.mail(:to=>'mi@mifo.sk',
            :from => 'otvorenysoftver@mifo.sk',
            :subject=> "[otvorenysoftver.sk] #{params["name"]}",
            :body => "\n#{params["text"]}\n\n---\nOdosielatel: #{params["email"]}\n--- #{params.inspect}",
            :via_options => {
              :address => 'smtp.gmail.com',
              :port => '587',
              :user_name => 'mi@mifo.sk',
              :password => 'suunto45l',
              :authentication => :plain,
              :domain => 'mifo.sk'
             })
   "Ďakujeme Vám! Vaša žiadosť o pridanie bola odoslaná na posúdenie v prípade zverejnenia,
   budete o tomto informovaný mailom na adresu: #{params["email"]}"
end
