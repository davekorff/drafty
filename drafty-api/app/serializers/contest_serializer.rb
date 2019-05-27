class ContestSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :prize, :high_score, :sorted_scores
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


  def sorted_scores
    self.object.teams.map {|team| team.score}.sort.reverse
  end
end
