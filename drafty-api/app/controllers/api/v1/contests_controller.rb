class Api::V1::ContestsController < ApplicationController
	def index
		contests = Contest.all

		render json: contests
	end

	def show
		contest = Contest.find(params[:id])

		render json: contest
	end 
end
