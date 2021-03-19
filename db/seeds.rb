# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
ApplicationRecord.connection.reset_pk_sequence!('users')

User.create(full_name: 'Slacker Demo', display_name: 'Slacker', email: 'slacker@slacker.com', password: 'slacker')
User.create(full_name: 'Bradley Trick', display_name: 'Brad', email: 'brad@gmail.com', password: '1234567')
User.create(full_name: 'Joe Smith', display_name: 'Joe', email: 'jsmith@anderson.edu', password: '1234567')