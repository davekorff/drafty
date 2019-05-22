class Forecast < ApplicationRecord
  belongs_to :weatherperson

  def score
    if self.actual_temp != nil
      temp_score = (self.predicted_temp - self.actual_temp).abs

      if self.predicted_weather == self.actual_weather
        weather_score = 30
      else
        weather_score = 0
      end

      weather_score - temp_score
    end
  end
end
