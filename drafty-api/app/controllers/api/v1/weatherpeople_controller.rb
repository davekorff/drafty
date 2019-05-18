class Api::V1::WeatherpeopleController < ApplicationController
	def index
		weatherpeople = Weatherperson.all

		render json: weatherpeople
	end

	def show
		weatherperson = Weatherperson.find(params[:id])

		render json: weatherperson
	end
end
