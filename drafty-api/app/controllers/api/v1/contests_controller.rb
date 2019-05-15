class Api::V1::ContestsController < ApplicationController
	def index
		contests = Contest.all
		
		render json: contests
	end
end
