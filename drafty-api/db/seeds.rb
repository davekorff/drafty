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


Contest.create(name: 'Spring No. 9', start_date: '2019-05-13', end_date: '2019-05-17', prize: 100)
Contest.create(name: 'Spring No. 10', start_date: '2019-05-20', end_date: '2019-05-24', prize: 150)
Contest.create(name: 'Spring No. 11', start_date: '2019-05-27', end_date: '2019-05-31', prize: 200)
Contest.create(name: 'Spring No. 12', start_date: '2019-06-03', end_date: '2019-06-07', prize: 250)


i = 0
uids = (1..22).to_a.shuffle
while i < 10 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 1, score: 0)
  i += 1
end

i = 0
uids = (1..22).to_a.shuffle
while i < 8 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 2, score: 0)
  i += 1
end

i = 0
uids = (1..22).to_a.shuffle
while i < 6 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 3, score: 0)
  i += 1
end

i = 0
uids = (1..22).to_a.shuffle
while i < 4 do
  uid = uids.pop
  Team.create(name: Faker::Kpop.i_groups, user_id: uid, contest_id: 4, score: 0)
  i += 1
end


Weatherperson.create(name: 'Brick', station: 'KVWN ch. 4', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'ABC', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'NBC', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'CBS', city: 'NYC')
Weatherperson.create(name: Faker::FunnyName.name, station: 'FOX', city: 'NYC')


weather = ['Sunny', 'Cloudy', 'Rain', 'T-storm',]
temps = (65..80).to_a


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


# UPDATE CONTEST 1 ACTUAL TEMPS
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

# UPDATE CONTEST 1 ACTUAL WEATHER
