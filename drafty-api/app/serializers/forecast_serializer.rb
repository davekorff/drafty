class ForecastSerializer < ActiveModel::Serializer
  attributes :id, :weatherperson_id, :date, :predicted_temp, :actual_temp, :predicted_weather, :actual_weather, :score
end
