################################## USERS ##################################

users = [
  'adam', 'akram', 'alonso', 'dave', 'diana', 'faizan', 'jessy', 'ian',
  'kate', 'khaled', 'matt', 'mica', 'naomi', 'nate', 'nicky', 'richie',
  'ryan', 'tali', 'tony', 'vicky', 'victoria', 'will'
]

i = 0
while i < users.length
  User.create(username: users[i], password: '1234')
  i += 1
end

################################## CONTESTS ##################################

Contest.create(name: 'Summer No. 1', start_date: '2019-06-24', end_date: '2019-06-28', prize: 100)
Contest.create(name: 'Summer No. 2', start_date: '2019-07-01', end_date: '2019-07-05', prize: 100)
Contest.create(name: 'Summer No. 3', start_date: '2019-07-08', end_date: '2019-07-12', prize: 100)
Contest.create(name: 'Summer No. 4', start_date: '2019-07-15', end_date: '2019-07-19', prize: 100)
Contest.create(name: 'Summer No. 5', start_date: '2019-07-22', end_date: '2019-07-26', prize: 100)
Contest.create(name: 'Summer No. 6', start_date: '2019-07-29', end_date: '2019-08-02', prize: 100)

################################## TEAMS ##################################

kpop = ["Chocolat", "Luv", "Gavy NJ", "Skarf", "Stellar", "Cosmic Girls", "Sunny Days", "Cosmic Girls", "Mamamoo",
  "Tahiti", "Fiestar", "Dia", "Red Velvet", "Good Day", "Lovelyz", "Bob Girls",
  "Wink", "Loona", "Draft:THE ARK", "Girl's Day", "Sugar", "Bestie", "Momoland", "Girls' Generation-TTS",
  "T-ara", "Kiss", "She'z", "Roo'ra", "As One", "Fly to the Sky", "Seo Taiji and Boys", "Koyote",
  "Seo Taiji and Boys", "Cool", "Diva", "Roo'ra", "As One", "Cool", "Cool", "Seo Taiji and Boys",
  "As One", "Diva", "Baby V.O.X.", "Koyote", "Turbo", "Seo Taiji and Boys", "Chakra", "Untouchable", "Big Mama",
  "Miss $", "Sugar", "Tritops", "Papaya", "Mighty Mouth", "Super Junior-T", "Buzz", "SeeYa", "Big Mama", "Good Day",
  "Unnies", "Favorite", "F.Cuz", "K-Much", "Berry Good", "Bolbbalgan4", "C-Real",
  "Mr. Mr.", "Golden Child", "5urprise", "D-Unit", "C-Real", "Play the Siren", "Momoland",
  "Lunafly", "My Name", "Snuper", "Supernova ", "100%", "Cross Gene", "One Way", "Honey G", "F.Cuz", "Can",
  "Romeo", "Beatwin", "N-Sonic", "T-max", "Can", "K'Pop", "Wanted", "Winner", "Lunafly", "Voisper", "Big Bang",
  "Black Beat", "K'Pop", "HeartB", "Touch", "Lunafly", "Pentagon", "Black Beat", "Brown Eyes", "Pentagon",
  "Vibe", "Boys Republic", "Highlight"
]

Contest.all.each do |contest|
  j = 0
  uids = (1..User.all.length).to_a.shuffle
  while j < User.all.length
    uid = uids.pop
    Team.create(name: kpop.sample, user_id: uid, contest_id: contest.id)
    j += 1
  end
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

Contest.all.each do |contest|
  i = 0
  while i < 5
    j = 0
    while j < Weatherperson.all.length
      Forecast.create(weatherperson_id: j + 1, date: contest.start_date + i, predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
      j += 1
    end
    i += 1
  end
end

####################### ADD LAST CONTESTS FORECASTS #######################

# weather = ['Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'T-storm']
# temps = (65..80).to_a
#
# i = 0
# while i < 5
#   j = 0
#   while j < Weatherperson.all.length
#     Forecast.create(weatherperson_id: j + 1, date: Contest.last.start_date + i, predicted_temp: temps.sample, actual_temp: nil, predicted_weather: weather.sample, actual_weather: nil)
#     j += 1
#   end
#   i += 1
# end

################################## DRAFTS ##################################

Contest.all.each do |contest|
  contest.teams.each do |team|
    j = 0
    wp_ids = (1..Weatherperson.all.length).to_a.shuffle[0..2]
    while j < 3 do
      Draft.create(team_id: team.id, weatherperson_id: wp_ids[j])
      j += 1
    end
  end
end

################################## UPDATE FORECASTS ##################################

weather = ['Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'T-storm']
temps = (65..80).to_a

Contest.all[0..3].each do |contest|
  i = 0
  while i < 5
    w = weather.sample
    t = temps.sample
    Forecast.all.each do |forecast|
      if forecast.date == contest.start_date + i
        forecast.update(actual_weather: w)
        forecast.update(actual_temp: t)
      end
    end
    i += 1
  end
end

####################### UPDATE LAST CONTESTS FORECASTS #######################

# weather = ['Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'Rain', 'Sunny', 'Cloudy', 'T-storm']
# temps = (65..80).to_a
#
#
# i = 0
# while i < 5
#   w = weather.sample
#   t = temps.sample
#   Forecast.all.each do |forecast|
#     if forecast.date == Contest.last.start_date + i
#       forecast.update(actual_weather: w)
#       forecast.update(actual_temp: t)
#     end
#   end
#   i += 1
# end
