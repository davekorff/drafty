class ForecastSerializer < ActiveModel::Serializer
  attributes :id, :weatherperson_id, :date, :predicted_temp, :actual_temp, :predicted_weather, :actual_weather, :score

  def score
    if self.object.actual_temp != nil
      temp_score = (self.object.predicted_temp - self.object.actual_temp).abs * -1

      if self.object.predicted_weather == self.object.actual_weather
        weather_score = 50
      else
        weather_score = -25
      end

      weather_score - temp_score
    end

  end

  belongs_to :weatherperson
end
