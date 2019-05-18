class WeatherpersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :station, :city, :forecasts

  has_many :forecasts
end
