class AddColumnImgUrlLgToWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    add_column :weatherpeople, :img_url_lg, :string
  end
end
