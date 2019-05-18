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
		draft = Draft.create(user_id: params[:user_id], contest_id: params[:contest_id], weatherperson_id: params[:weatherperson_id])

		render json: draft
	end


end
