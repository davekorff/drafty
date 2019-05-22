class Api::V1::ForecastsController < ApplicationController
	def index
		forecasts = Forecast.all

		render json: forecasts
	end

	def show
		forecast = Forecast.find(params[:id])

		render json: forecast
	end
end
