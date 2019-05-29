################################## USERS ##################################
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

################################## CONTESTS ##################################
Contest.create(name: 'Spring No. 8', start_date: '2019-05-06', end_date: '2019-05-10', prize: 100)
Contest.create(name: 'Spring No. 9', start_date: '2019-05-13', end_date: '2019-05-17', prize: 100)
Contest.create(name: 'Spring No. 10', start_date: '2019-05-20', end_date: '2019-05-24', prize: 100)
Contest.create(name: 'Spring No. 11', start_date: '2019-05-27', end_date: '2019-05-31', prize: 100)
Contest.create(name: 'Spring No. 12', start_date: '2019-06-03', end_date: '2019-06-07', prize: 100)
Contest.create(name: 'Spring No. 13', start_date: '2019-06-10', end_date: '2019-06-14', prize: 100)
Contest.create(name: 'Spring No. 14', start_date: '2019-06-17', end_date: '2019-06-21', prize: 100)

################################## TEAMS ##################################
kpop = ["Chocolat", "Luv", "Gavy NJ", "Skarf", "Stellar", "Cosmic Girls", "Sunny Days", "Cosmic Girls", "Mamamoo",
  "Tahiti", "Fiestar", "Dia", "Red Velvet", "Good Day", "Lovelyz", "Bob Girls",
  "Wink", "Loona", "Draft:THE ARK", "Girl's Day", "Sugar", "Bestie", "Momoland", "Girls' Generation-TTS",
  "T-ara", "Kiss", "She'z", "Roo'ra", "As One", "Fly to the Sky", "Seo Taiji and Boys", "Koyote",
  "Seo Taiji and Boys", "Cool", "Diva", "Roo'ra", "As One", "Cool", "Cool", "Seo Taiji and Boys",
  "As One", "Diva", "Baby V.O.X.", "Koyote", "Turbo", "Seo Taiji and Boys", "Chakra", "Untouchable", "Big Mama",
  "Miss $", "Sugar", "Tritops", "Papaya", "Mighty Mouth", "Super Junior-T", "Buzz", "SeeYa", "Big Mama", "Good Day",
  "Unnies", "Favorite", "F.Cuz", "Momoland", "K-Much", "K-Much", "Berry Good", "Bolbbalgan4", "C-Real",
  "Mr. Mr.", "Golden Child", "5urprise", "D-Unit", "C-Real", "Play the Siren", "Momoland",
  "Lunafly", "My Name", "Snuper", "Supernova ", "100%", "Cross Gene", "One Way", "Honey G", "F.Cuz", "Can",
  "Romeo", "Beatwin", "N-Sonic", "T-max", "Can", "K'Pop", "Wanted", "Winner", "Lunafly", "Voisper", "Big Bang",
  "Black Beat", "K'Pop", "HeartB", "Touch", "Lunafly", "Pentagon", "Black Beat", "Brown Eyes", "Pentagon",
  "Vibe", "Boys Republic", "Highlight"
]

#CONTEST 1 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: kpop.pop, user_id: uid, contest_id: 1)
  i += 1
end

#CONTEST 2 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: kpop.pop, user_id: uid, contest_id: 2)
  i += 1
end

#CONTEST 3 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: kpop.pop, user_id: uid, contest_id: 3)
  i += 1
end

#CONTEST 4 TEAMS
i = 0
uids = (1..22).to_a.shuffle
while i < 22 do
  uid = uids.pop
  Team.create(name: kpop.pop, user_id: uid, contest_id: 4)
  i += 1
end


################################## WEATHERPEOPLE ##################################
bios = [
  "'I just - I can't stand the sound of the human voice.'",
  "Hy Lowe is an on-camera meteorologist and host. He can be seen weeknights. Hy was a meteorologist for KING-TV in Sarasota and contributed to Southeast Cable News. He also worked at KTVZ-TV in Atlanta, Georgia, as a chief weather anchor and at KSBY-TV in San Luis Obispo, California as a weather anchor and reporter. A recipient of the AMS Seal of Approval, Hy was awarded a 2008 Emmy Award for on camera talent in the weather category. A native of Kirkland, Washington, Hy received his bachelor’s degree in broadcasting with a psychology minor from Washington State University and a certificate in broadcast meteorology from Mississippi State University. Hy enjoys being outdoors and, when not at work, can be found hiking, snowboarding, throwing a football in the park, traveling or shooting photographs. He is also certified in basic keelboat sailing by the American Sailing Association.",
  "Amy Freeze earned her bachelor's degree in meteorology from Pennsylvania State University in 1998 - a year after an internship with FOX. Later that year, she joined FOX as a full-time forecaster. Amy first participated in the on-camera meteorologist apprentice program at FOX, earning time in front of the camera every weekend. In addition to her on-air assignments, Amy gained valuable weather knowledge and experience from several key positions in the meteorology departments. During that time, Amy was the liaison for the Meteorology Science & Strategy Department to several other business units. She also was the point person for FOX's tactical operations with the National Weather Service, the EPA AIRNow program and other related government agencies. Amy developed and led Weather Camps around the country for FOX and continues to speak to students about a passion of hers - science. In her spare time, Amy enjoys running, relaxing at the beach or working in the yard. Her favorite weather measurement is dew points as she is often referred to as the 'Dewpoint Diva.' Her life-long goal is to help people understand how important they are to everyday life. Amy lives in Chicago, IL with her husband and two children. ",
  "Dusty Storm co-hosts 'Weekend Recharge' weekend mornings from 9 a.m. - 12 p.m. Dusty joined the network in 1999 after several years as on-camera weathercaster at KSDK-TV in St. Louis, KRIV-TV in Houston, and KSBY-TV in San Luis Obisbo, CA. After majoring in geography at the University of Texas at Austin, Dusty earned his master's degree in climatology from the University of California at Berkeley. Dusty was born and raised in New Rochelle, NY, about 30 minutes north of New York City in Westchester County. Dusty is a member of The American Meteorology Society, the National Weather Association and the National Association of Black Journalists. Dusty was chosen to be featured in the '50 Most Beautiful People' issue of 'People' Magazine in May 2001. Dusty enjoys skiing, snowboarding, golf, tennis, traveling and spending time with his wife and two sons.",
  "April grew up in Macungie, PA, and studied at Syracuse University and Penn State University. April holds the Certified Broadcast Meteorologist designation from the American  Meteorological Society. At Penn State, she was awarded the AMS John R. Hope Endowed Scholarship in Atmospheric Science (endowed by The Weather Channel), the Joel N. and Peggy Myers Scholarship in Meteorology (from the PSU Department  of Meteorology) and the John and Elizabeth Holmes Teas Scholarship (from the  PSU College of Earth and Mineral Sciences). April loves all things pop culture! She has two spoiled dogs, and is a self proclaimed foodie. She enjoys group fitness, exploring local restaurants and traveling. She also cheers on Syracuse, Penn State and Philly sports teams.",
  "Brick Tamland has covered wildfires, floods, tornadoes, heatwaves, winter storms, and earthquakes, providing live reports from many hurricanes and tropical storms along the Gulf Coast, eastern seaboard, The Bahamas and Hawaii. Brick spent much of the Spring and Summer of 2010 reporting on the oil disaster in the Gulf of Mexico, and was the first at KVWN to fly with the U.S. Coast Guard. Before joining KVWN, Brick worked in many local television stations across the United States, with stops in St. Louis, Mo.; Orlando, Fla.; Detroit, Mich.; Austin, Texas; San Luis Obispo, Calif.; and Anniston, Ala. A native of Jemison, Ala., Brick is a graduate of Jacksonville State University and has a Certificate of Broadcast Meteorology from Mississippi State University. He holds the American Meteorological Society Seal of Approval. He once killed a man with a trident."
]

educations = [
  "'Hey, mind your own business. How about that?'",
  "Bachelor’s degree in Broadcasting with a Psychology minor from Washington State University",
  "Bachelor's degree in Meteorology from Pennsylvania State University",
  "Master's degree in climatology from the University of California at Berkeley",
  "Bachelor's degree in meteorology from Penn State University",
  "Jacksonville State University Certificate of Broadcast Meteorology from Mississippi State University",
]

Weatherperson.create(name: 'Brick Tamland', station: 'KVWN ch. 4', city: 'San Diego, CA', img_url_sm: '/brick-tamland-sm.png', img_url_lg: '/brick-tamland-lg.png', education: educations.pop, bio: bios.pop)
Weatherperson.create(name: 'April Schauer', station: 'CBS', city: 'New York, NY', img_url_sm: '/april-schauer-sm.png', img_url_lg: '/april-schauer-lg.jpg', education: educations.pop, bio: bios.pop)
Weatherperson.create(name: 'Dusty Storm', station: 'ABC', city: 'Las Vegas, NV', img_url_sm: '/dusty-storm-sm.png', img_url_lg: '/dusty-storm-lg.jpeg', education: educations.pop, bio: bios.pop)
Weatherperson.create(name: 'Amy Freeze', station: 'FOX', city: 'Chicago, IL', img_url_sm: '/amy-freeze-sm.png', img_url_lg: '/amy-freeze-lg.jpg', education: educations.pop, bio: bios.pop)
Weatherperson.create(name: 'Hy Lowe', station: 'NBC', city: 'Miami, FL', img_url_sm: '/hy-low-sm.png', img_url_lg: '/hy-low-lg.jpg', education: educations.pop, bio: bios.pop)
Weatherperson.create(name: 'Larry Sprinkle', station: 'KCPY', city: 'Los Angeles, CA', img_url_sm: '/larry-sprinkle-sm.png', img_url_lg: '/larry-sprinkle-lg.jpg', education: educations.pop, bio: bios.pop)


################################## FORECASTS ##################################
weather = ['Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'T-storm']
temps = (65..80).to_a

#CONTEST 1 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-08', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-09', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 2 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-15', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-16', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 3 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-22', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-23', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-24', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 4 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-27', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-28', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-29', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-30', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-05-31', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 5 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-03', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-04', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-05', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-06', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-07', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 6 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-10', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-11', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-12', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-13', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-14', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)

#CONTEST 7 FORECASTS
Forecast.create(weatherperson_id: 1, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-17', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-18', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-19', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-20', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 1, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 2, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 3, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 4, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 5, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
Forecast.create(weatherperson_id: 6, date: '2019-06-21', predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)


################################## DRAFTS ##################################

#CONTEST 1 DRAFTS
i = 0
team_ids = (1..22).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..Weatherperson.all.length).to_a.shuffle
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
  wp_ids = (1..Weatherperson.all.length).to_a.shuffle
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
  wp_ids = (1..Weatherperson.all.length).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 45, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end

#CONTEST 4 DRAFTS
i = 0
team_ids = (67..88).to_a.shuffle
while i < 22 do
  j = 0
  team_id = team_ids.pop
  wp_ids = (1..Weatherperson.all.length).to_a.shuffle
  while j < 3 do
    three_wp_ids = wp_ids[0..2]
    Draft.create(team_id: i + 67, weatherperson_id: three_wp_ids[j])
    j += 1
  end
  i += 1
end


################################## UPDATE FORECASTS ##################################

# UPDATE CONTEST 1 FORECASTS WITH ACTUAL TEMPS
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

# UPDATE CONTEST 1 FORECASTS WITH ACTUAL WEATHER
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


# UPDATE CONTEST 2 FORECASTS WITH ACTUAL TEMPS
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

# UPDATE CONTEST 2 FORECASTS WITH ACTUAL WEATHER
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


# UPDATE CONTEST 3 FORECASTS WITH ACTUAL TEMPS
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

# UPDATE CONTEST 3 FORECASTS WITH ACTUAL WEATHER
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
