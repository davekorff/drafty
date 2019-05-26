class User < ApplicationRecord
  has_many :teams
  has_many :contests, through: :teams
  has_secure_password

  validates :username, uniqueness: true

  def current_teams
    self.teams.select {|team| team.contest.end_date >= Date.today }
  end

  def past_teams
    self.teams.select {|team| team.contest.end_date < Date.today }
  end
end
