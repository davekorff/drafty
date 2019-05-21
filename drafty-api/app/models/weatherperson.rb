class Weatherperson < ApplicationRecord
  has_many :forecasts
  has_many :drafts
  has_many :teams, through: :drafts
end
