class Api::V1::TeamsController < ApplicationController

	def show
		team = Team.find(params[:id])

		render json: team
	end



	def create
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
		
		team = Team.create(user_id: params[:user_id], contest_id: params[:contest_id], name: kpop.sample)

		render json: team
	end

end
