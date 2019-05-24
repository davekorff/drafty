class Contest < ApplicationRecord
  has_many :teams
  has_many :users, through: :teams

  # find high score for the contest
  def high_score
    if self.end_date < Date.today
      self.teams.max_by { |team| team.score }.score
    end
  end

end
