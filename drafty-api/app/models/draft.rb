class Draft < ApplicationRecord
  belongs_to :team
  belongs_to :weatherperson
end
