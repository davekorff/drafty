class Team < ApplicationRecord
  belongs_to :user
  belongs_to :contest
  has_many :drafts
  has_many :weatherpeople, through: :drafts
  # has_many :forecasts, through: :weatherpeople


  def forecasts
    self.weatherpeople.map { |weatherperson| weatherperson.forecasts }.flatten.select { |forecast| forecast.date >= self.contest.start_date && forecast.date <= self.contest.end_date}
  end

  # calculate the team score
  def score
    if self.contest.end_date < Date.today
      self.forecasts.map { |forecast| forecast.score }.reduce(:+)
    end
  end

  def prize
    
  end


  # def winner?
  #   self.score >= self.contest.teams.max_by { |team| team.score }.score
  # end

  # calculate the team winnings, if any
  # def winnings
  #   self.contest.prize if self.contest.high_score.score == self.score && self.contest.end_date < Date.today
  # end
end
