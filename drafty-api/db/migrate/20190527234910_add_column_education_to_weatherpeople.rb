class AddColumnEducationToWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    add_column :weatherpeople, :education, :string
  end
end
