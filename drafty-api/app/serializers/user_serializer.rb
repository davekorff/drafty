class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :teams
  has_many :contests, through: :teams
  has_many :current_teams
  has_many :past_teams

  def current_teams
    self.object.teams.select {|team| team.contest.end_date >= Date.today }
  end

  def past_teams
    self.object.teams.select {|team| team.contest.end_date < Date.today }
  end

end
