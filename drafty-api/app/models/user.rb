class User < ApplicationRecord
  has_many :teams
  has_many :contests, through: :teams
  has_secure_password

  validates :username, uniqueness: true
end
