class ContestSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :prize, :high_score
  #
  #
  # def team_count
  #   self.object.teams.count
  # end

  # def teams
  #   self.object.teams
  # end
  # has_many :teams
  # has_many :users, through: :teams
end
