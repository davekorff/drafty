class Forecast < ApplicationRecord
  belongs_to :weatherperson

  # calculate the forecast score
  def score
    if self.actual_weather && self.actual_temp
      temp_score = (self.predicted_temp - self.actual_temp).abs

      if self.predicted_weather == self.actual_weather
        weather_score = 50
      else
        weather_score = 0
      end

      weather_score - temp_score
    end
  end

end
