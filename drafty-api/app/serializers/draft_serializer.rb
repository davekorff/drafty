class DraftSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :weatherperson_id, :user

  belongs_to :team
  belongs_to :weatherperson

  def user
    {id: self.object.team.user.id, username: self.object.team.user.username}
  end
end
