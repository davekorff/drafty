class Contest < ApplicationRecord
  has_many :teams
  has_many :users, through: :teams

  # find high score for the contest
  def high_score
    self.teams.includes(:forecasts).max_by { |team| team.score }.score
  end

  # find the users ids for the team(s) with the top score
  def winning_user_ids
    self.teams.select { |team| team.score == self.high_score }.map { |team| team.user_id }
  end

end
