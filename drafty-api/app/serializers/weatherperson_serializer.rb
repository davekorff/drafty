class WeatherpersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :station, :city, :drafted, :forecasts

  has_many :forecasts
end
