class Api::V1::TeamsController < ApplicationController
	# def index
	# 	teams = Team.all
	#
	# 	render json: teams
	# end

	def show
		team = Team.find(params[:id])

		render json: team
	end

	def create
		team = Team.create(user_id: params[:user_id], contest_id: params[:contest_id], name: Faker::Kpop.i_groups)

		render json: team
	end

end
