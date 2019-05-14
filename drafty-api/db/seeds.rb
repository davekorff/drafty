# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'adam', password: '1234', balance: 0)
User.create(username: 'akram', password: '1234', balance: 0)
User.create(username: 'alonso', password: '1234', balance: 0)
User.create(username: 'dave', password: '1234', balance: 0)
User.create(username: 'diana', password: '1234', balance: 0)
User.create(username: 'faizan', password: '1234', balance: 0)
User.create(username: 'jessy', password: '1234', balance: 0)
User.create(username: 'ian', password: '1234', balance: 0)
User.create(username: 'kate', password: '1234', balance: 0)
User.create(username: 'khaled', password: '1234', balance: 0)
User.create(username: 'matt', password: '1234', balance: 0)
User.create(username: 'mica', password: '1234', balance: 0)
User.create(username: 'naomi', password: '1234', balance: 0)
User.create(username: 'nicky', password: '1234', balance: 0)
User.create(username: 'richie', password: '1234', balance: 0)
User.create(username: 'ryan', password: '1234', balance: 0)
User.create(username: 'tali', password: '1234', balance: 0)
User.create(username: 'tony', password: '1234', balance: 0)
User.create(username: 'vicky', password: '1234', balance: 0)
User.create(username: 'victoria', password: '1234', balance: 0)
User.create(username: 'will', password: '1234', balance: 0)


# Contest.create(name: 'Spring #10', start_date: '2019-05-20', end_date: '2019-05-24', prize: 100)
# Contest.create(name: 'Spring #11', start_date: '2019-05-27', end_date: '2019-05-31', prize: 100)
# Contest.create(name: 'Spring #12', start_date: '2019-06-03', end_date: '2019-06-07', prize: 100)
#
#
#
# uids = (1..User.all.length).to_a.shuffle
#
# 10.times do
#   uid = uids.pop
#   Team.create(name: Faker::Team.name, user_id: uid, contest_id: 1, score: 0)
# end
