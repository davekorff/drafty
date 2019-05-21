#USERS
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
User.create(username: 'nate', password: '1234', balance: 0)
User.create(username: 'nicky', password: '1234', balance: 0)
User.create(username: 'richie', password: '1234', balance: 0)
User.create(username: 'ryan', password: '1234', balance: 0)
User.create(username: 'tali', password: '1234', balance: 0)
User.create(username: 'tony', password: '1234', balance: 0)
User.create(username: 'vicky', password: '1234', balance: 0)
User.create(username: 'victoria', password: '1234', balance: 0)
User.create(username: 'will', password: '1234', balance: 0)

#CONTESTS
Contest.create(name: 'Spring No. 8', start_date: '2019-05-06', end_date: '2019-05-10', prize: 100)
Contest.create(name: 'Spring No. 9', start_date: '2019-05-13', end_date: '2019-05-17', prize: 100)
Contest.create(name: 'Spring No. 10', start_date: '2019-05-20', end_date: '2019-05-24', prize: 100)
Contest.create(name: 'Spring No. 11', start_date: '2019-05-27', end_date: '2019-05-31', prize: 100)
Contest.create(name: 'Spring No. 12', start_date: '2019-06-03', end_date: '2019-06-07', prize: 100)
Contest.create(name: 'Spring No. 13', start_date: '2019-06-10', end_date: '2019-06-14', prize: 100)
Contest.create(name: 'Spring No. 14', start_date: '2019-06-17', end_date: '2019-06-21', prize: 100)


#CONTEST 1 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 5 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 1, score: 0)
  i += 1
end


#CONTEST 2 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 5 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 2, score: 0)
  i += 1
end

#CONTEST 3 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 5 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 3, score: 0)
  i += 1
end


#WEATHERPEOPLE
Weatherperson.create(name: 'Brick', station: 'KVWN ch. 4', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'ABC', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'NBC', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'CBS', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'FOX', city: 'NYC')


#CONTEST 1 DRAFTS
Draft.create(team_id: 1, weatherperson_id: 1)
Draft.create(team_id: 1, weatherperson_id: 2)
Draft.create(team_id: 1, weatherperson_id: 3)

Draft.create(team_id: 2, weatherperson_id: 2)
Draft.create(team_id: 2, weatherperson_id: 3)
Draft.create(team_id: 2, weatherperson_id: 4)

Draft.create(team_id: 3, weatherperson_id: 3)
Draft.create(team_id: 3, weatherperson_id: 4)
Draft.create(team_id: 3, weatherperson_id: 5)

Draft.create(team_id: 4, weatherperson_id: 1)
Draft.create(team_id: 4, weatherperson_id: 2)
Draft.create(team_id: 4, weatherperson_id: 4)

Draft.create(team_id: 5, weatherperson_id: 2)
Draft.create(team_id: 5, weatherperson_id: 3)
Draft.create(team_id: 5, weatherperson_id: 5)


#CONTEST 2 DRAFTS
Draft.create(team_id: 6, weatherperson_id: 2)
Draft.create(team_id: 6, weatherperson_id: 5)
Draft.create(team_id: 6, weatherperson_id: 3)

Draft.create(team_id: 7, weatherperson_id: 2)
Draft.create(team_id: 7, weatherperson_id: 3)
Draft.create(team_id: 7, weatherperson_id: 4)

Draft.create(team_id: 8, weatherperson_id: 3)
Draft.create(team_id: 8, weatherperson_id: 4)
Draft.create(team_id: 8, weatherperson_id: 5)

Draft.create(team_id: 9, weatherperson_id: 1)
Draft.create(team_id: 9, weatherperson_id: 3)
Draft.create(team_id: 9, weatherperson_id: 5)

Draft.create(team_id: 10, weatherperson_id: 2)
Draft.create(team_id: 10, weatherperson_id: 4)
Draft.create(team_id: 10, weatherperson_id: 5)


#CONTEST 3 DRAFTS
Draft.create(team_id: 11, weatherperson_id: 4)
Draft.create(team_id: 11, weatherperson_id: 1)
Draft.create(team_id: 11, weatherperson_id: 3)

Draft.create(team_id: 12, weatherperson_id: 1)
Draft.create(team_id: 12, weatherperson_id: 3)
Draft.create(team_id: 12, weatherperson_id: 4)

Draft.create(team_id: 13, weatherperson_id: 3)
Draft.create(team_id: 13, weatherperson_id: 1)
Draft.create(team_id: 13, weatherperson_id: 5)

Draft.create(team_id: 14, weatherperson_id: 1)
Draft.create(team_id: 14, weatherperson_id: 2)
Draft.create(team_id: 14, weatherperson_id: 4)

Draft.create(team_id: 15, weatherperson_id: 2)
Draft.create(team_id: 15, weatherperson_id: 1)
Draft.create(team_id: 15, weatherperson_id: 5)



weather = ['Sunny', 'Cloudy', 'Rain', 'T-storm']
temps = (65..80).to_a

#CONTEST 1
Forecast.create(weatherperson_id: 1, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)

#CONTEST 2
Forecast.create(weatherperson_id: 1, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)

#CONTEST 3
Forecast.create(weatherperson_id: 1, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)


#CONTEST 4
Forecast.create(weatherperson_id: 1, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)



#CONTEST 5
Forecast.create(weatherperson_id: 1, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)

#CONTEST 6
Forecast.create(weatherperson_id: 1, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)

#CONTEST 7
Forecast.create(weatherperson_id: 1, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 1, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 2, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 3, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 4, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)
Forecast.create(weatherperson_id: 5, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil, score: 0)


# UPDATE CONTEST 1 WITH ACTUAL TEMPS
combined_temps = 0

Forecast.all.each do |f|
  if f.date.to_s >= '2019-05-06' && f.date.to_s <= '2019-05-10'
    combined_temps += f.predicted_temp
  end
  combined_temps.to_f
end

avg_temp = (combined_temps / 25).round


temp_diffs = (-5..5).to_a.shuffle

Forecast.all.each do |f|
  if f.date.to_s >= '2019-05-06' && f.date.to_s <= '2019-05-10'
    temp_diff = temp_diffs.sample
    f.update(actual_temp: avg_temp + temp_diff)
  end
end



# UPDATE CONTEST 1 WITH ACTUAL WEATHER

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-06'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-07'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-08'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-09'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-10'
    f.update(actual_weather: actual_weather)
  end
end





# UPDATE CONTEST 2 WITH ACTUAL TEMPS
combined_temps = 0

Forecast.all.each do |f|
  if f.date.to_s >= '2019-05-13' && f.date.to_s <= '2019-05-17'
    combined_temps += f.predicted_temp
  end
  combined_temps.to_f
end

avg_temp = (combined_temps / 25).round


temp_diffs = (-5..5).to_a.shuffle

Forecast.all.each do |f|
  if f.date.to_s >= '2019-05-13' && f.date.to_s <= '2019-05-17'
    temp_diff = temp_diffs.sample
    f.update(actual_temp: avg_temp + temp_diff)
  end
end



# UPDATE CONTEST 2 WITH ACTUAL WEATHER
actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-13'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-14'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-15'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-16'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-17'
    f.update(actual_weather: actual_weather)
  end
end
