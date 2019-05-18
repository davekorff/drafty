class Draft < ApplicationRecord
  belongs_to :user
  belongs_to :contest
  belongs_to :weatherperson
end
