class Team < ApplicationRecord
  belongs_to :user
  belongs_to :contest
  has_many :drafts
  has_many :weatherpeople, through: :drafts
  has_many :forecasts, through: :weatherpeople

  # calculate the team score
  def score
    score = 0
    self.forecasts.each do |forecast|
      if forecast.score != nil && forecast.date >= self.contest.start_date && forecast.date <= self.contest.end_date
        score += forecast.score
      end
    end
    score
  end

end
