class DraftSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :weatherperson_id

  belongs_to :team
  belongs_to :weatherperson
end
