class ForecastSerializer < ActiveModel::Serializer
  attributes :id, :date, :predicted_temp, :actual_temp, :predicted_weather, :actual_weather, :score

  # belongs_to :weatherperson
end
