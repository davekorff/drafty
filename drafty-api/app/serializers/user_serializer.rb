class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :balance

  has_many :teams
  has_many :contests, through: :teams
end
