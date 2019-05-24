class Contest < ApplicationRecord
  has_many :teams
  has_many :users, through: :teams

  # find high score for the contest
  def high_score
    self.teams.includes(:forecasts).max_by { |team| team.score }
  end

end
