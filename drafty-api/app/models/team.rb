class Team < ApplicationRecord
  belongs_to :user
  belongs_to :contest
  has_many :drafts
  has_many :weatherpeople, through: :drafts

  def forecasts
    self.weatherpeople.map { |weatherperson| weatherperson.forecasts }.flatten.select { |forecast| forecast.date >= self.contest.start_date && forecast.date <= self.contest.end_date}
  end

  # calculate the team score
  def score
    if self.contest.end_date < Date.today && self.forecasts.first && self.forecasts.first.score
      self.forecasts.map { |forecast| forecast.score }.reduce(:+)
    end
  end

end
