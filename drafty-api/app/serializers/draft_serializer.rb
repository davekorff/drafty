class DraftSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :weatherperson_id, :contest_id
end
