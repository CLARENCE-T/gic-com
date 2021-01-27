# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

p 'destroy everything'

User.destroy_all
Talent.destroy_all
Event.destroy_all
About.destroy_all
Picture.destroy_all

p 'create user'

geoffrey = User.create! email: 'gervais.geoffrey@gmail.com', password: '123456', password_confirmation: '123456', admin: true

p 'create events'

narcisse = Event.create! description: 'Narcisse Mag', date: Date.strptime('20/10/2017', '%d/%m/%Y')
file = URI.open('https://res.cloudinary.com/dwklvsgae/image/upload/v1611752251/7z8xpuuzwtvrd85uf9af8lww7kic.jpg')
narcisse.images.attach(io: file, filename: 'narcisse.png', content_type: 'image/jpg')

# off = Event.create! description: 'Soirée OFF', date: Date.strptime('23/09/2020', '%d/%m/%Y')
# file = URI.open('https://res.cloudinary.com/dwklvsgae/image/upload/v1611761114/EVENTS/OFF/OFF_Paris_Seine_c_Julien_Mouffron-Gardner-117_2_v5hx7o.jpg')
# off.images.attach(io: file, filename: 'narcisse.png', content_type: 'image/jpg')

# lutecia = Event.create! description: 'Soirée OFF'
# file = URI.open('https://res.cloudinary.com/dwklvsgae/image/upload/v1611761177/EVENTS/LUTECIA%20JOSEPHINE/JustinPrinz-technogym-1195_rm2483.jpg')
# lutecia.images.attach(io: file, filename: 'narcisse.png', content_type: 'image/jpg')
