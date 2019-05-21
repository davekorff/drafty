class ContestSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :prize

  has_many :teams
  has_many :users, through: :teams
end
