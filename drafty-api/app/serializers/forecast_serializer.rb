class ForecastSerializer < ActiveModel::Serializer
  attributes :id, :weatherperson_id, :date, :predicted_temp, :actual_temp, :predicted_weather, :actual_weather, :score

  def score
    temp_score = (self.object.predicted_temp - self.object.actual_temp).abs * -1

    if predicted_weather == actual_weather
      weather_score = 50
    else
      weather_score = -25
    end

    weather_score - temp_score
  end

  belongs_to :weatherperson
end
