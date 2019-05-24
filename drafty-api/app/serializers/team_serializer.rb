class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :score, :contest, :weatherpeople

  def contest
    {
      id: self.object.contest.id,
      start_date: self.object.contest.start_date,
      end_date: self.object.contest.end_date,
      prize: self.object.contest.prize,
      high_score: self.object.contest.high_score,
      name: self.object.contest.name,
    }
  end
  #
  # def user
  #   {id: self.object.user.id}
  # end

  # def high_score
  #   self.object.contest.high_score
  # end


  # def weatherpeople
  #   self.object.weatherpeople.map { |wp| {name: wp.name, id: wp.id}}
  # end
  #
  # belongs_to :user
  # belongs_to :contest
  # has_many :drafts
  has_many :weatherpeople, through: :drafts
end
