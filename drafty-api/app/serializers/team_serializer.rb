class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :score, :weatherpeople, :contest, :winnings

  belongs_to :user
  belongs_to :contest
  has_many :drafts
  has_many :weatherpeople, through: :drafts
end
