class AddColumnImgUrlSmToWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    add_column :weatherpeople, :img_url_sm, :string
  end
end
