class Api::V1::DraftsController < ApplicationController
	def index
		drafts = Draft.all

		render json: drafts
	end

	def show
		draft = Draft.find(params[:id])

		render json: draft
	end

	def create
		draft = Draft.create(team_id: params[:team_id], weatherperson_id: params[:weatherperson_id])

		render json: draft
	end
end
