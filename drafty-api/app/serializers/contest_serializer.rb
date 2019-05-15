class ContestSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :prize
end
