class ContestSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :prize, :high_score

  has_many :teams
  has_many :users, through: :teams
end
