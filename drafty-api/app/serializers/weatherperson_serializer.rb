class WeatherpersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :station, :city, :img_url_sm, :img_url_lg, :bio
  #
  # has_many :forecasts
  # has_many :drafts
  # has_many :teams, through: :drafts
end
