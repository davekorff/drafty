class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :current_teams, :past_teams

  # has_many :teams
  # has_many :contests, through: :teams
  has_many :current_teams
  has_many :past_teams


end
