class Team < ApplicationRecord
  belongs_to :user
  belongs_to :contest
  has_many :drafts
  has_many :weatherpeople, through: :drafts
end
