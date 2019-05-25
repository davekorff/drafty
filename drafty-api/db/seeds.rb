#USERS
User.create(username: 'adam', password: '1234')
User.create(username: 'akram', password: '1234')
User.create(username: 'alonso', password: '1234')
User.create(username: 'dave', password: '1234')
User.create(username: 'diana', password: '1234')
User.create(username: 'faizan', password: '1234')
User.create(username: 'jessy', password: '1234')
User.create(username: 'ian', password: '1234')
User.create(username: 'kate', password: '1234')
User.create(username: 'khaled', password: '1234')
User.create(username: 'matt', password: '1234')
User.create(username: 'mica', password: '1234')
User.create(username: 'naomi', password: '1234')
User.create(username: 'nate', password: '1234')
User.create(username: 'nicky', password: '1234')
User.create(username: 'richie', password: '1234')
User.create(username: 'ryan', password: '1234')
User.create(username: 'tali', password: '1234')
User.create(username: 'tony', password: '1234')
User.create(username: 'vicky', password: '1234')
User.create(username: 'victoria', password: '1234')
User.create(username: 'will', password: '1234')

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
while i < 22 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 1)
  i += 1
end


#CONTEST 2 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 2)
  i += 1
end

#CONTEST 3 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 3)
  i += 1
end

#CONTEST 4 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 4)
  i += 1
end


#WEATHERPEOPLE
Weatherperson.create(name: 'Brick Tamland', station: 'KVWN ch. 4', city: 'NYC', img_url_sm: '/brick-tamland-sm.png', img_url_lg: '/brick-tamland-lg.png')
Weatherperson.create(name: 'Dusty Storm', station: 'ABC', city: 'NYC', img_url_sm: nil, img_url_lg: nil)
Weatherperson.create(name: 'April Schauer', station: 'CBS', city: 'NYC', img_url_sm: nil, img_url_lg: nil)
Weatherperson.create(name: 'Amy Freeze', station: 'FOX', city: 'NYC', img_url_sm: nil, img_url_lg: nil)
Weatherperson.create(name: 'Hy Lowe', station: 'NBC', city: 'NYC', img_url_sm: nil, img_url_lg: nil)


#CONTEST 1 DRAFTS

i = 0
team_ids = (1..22).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..5).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 1, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end


#CONTEST 2 DRAFTS
i = 0
team_ids = (23..44).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..5).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 23, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end


#CONTEST 3 DRAFTS
i = 0
team_ids = (45..66).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..5).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 45, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end

#CONTEST 4 DRAFTS
i = 0
team_ids = (66..87).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..5).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 45, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end


## TODO: ADD  'T-storm'

weather = ['Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'Rain', 'T-storm']
temps = (65..80).to_a

#CONTEST 1
Forecast.create(weatherperson_id: 1, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 2
Forecast.create(weatherperson_id: 1, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 3
Forecast.create(weatherperson_id: 1, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)


#CONTEST 4
Forecast.create(weatherperson_id: 1, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)



#CONTEST 5
Forecast.create(weatherperson_id: 1, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 6
Forecast.create(weatherperson_id: 1, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 7
Forecast.create(weatherperson_id: 1, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)


# UPDATE CONTEST 1 WITH ACTUAL TEMPS

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-06'
    f.update(actual_temp: 66)
  elsif f.date.to_s == '2019-05-07'
    f.update(actual_temp: 76)
  elsif f.date.to_s == '2019-05-08'
    f.update(actual_temp: 69)
  elsif f.date.to_s == '2019-05-09'
    f.update(actual_temp: 73)
  elsif f.date.to_s == '2019-05-10'
    f.update(actual_temp: 70)
  end
end



# UPDATE CONTEST 1 WITH ACTUAL WEATHER

### TODO: MAKE WEATHER PREDICTIONS "MORE ACCURATE" BY PULLING FROM MOST FREQUENTLY
### FORECASTED WEATHER FOR ACTUAL WEATHER SEEDING

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


Forecast.all.each do |f|
  if f.date.to_s == '2019-05-13'
    f.update(actual_temp: 71)
  elsif f.date.to_s == '2019-05-14'
    f.update(actual_temp: 68)
  elsif f.date.to_s == '2019-05-15'
    f.update(actual_temp: 76)
  elsif f.date.to_s == '2019-05-16'
    f.update(actual_temp: 78)
  elsif f.date.to_s == '2019-05-17'
    f.update(actual_temp: 73)
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




# UPDATE CONTEST 3 WITH ACTUAL TEMPS


Forecast.all.each do |f|
  if f.date.to_s == '2019-05-20'
    f.update(actual_temp: 78)
  elsif f.date.to_s == '2019-05-21'
    f.update(actual_temp: 70)
  elsif f.date.to_s == '2019-05-22'
    f.update(actual_temp: 68)
  elsif f.date.to_s == '2019-05-23'
    f.update(actual_temp: 66)
  elsif f.date.to_s == '2019-05-24'
    f.update(actual_temp: 69)
  end
end



# UPDATE CONTEST 3 WITH ACTUAL WEATHER
actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-20'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-21'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-22'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-23'
    f.update(actual_weather: actual_weather)
  end
end

actual_weather = weather.sample

Forecast.all.each do |f|
  if f.date.to_s == '2019-05-24'
    f.update(actual_weather: actual_weather)
  end
end
