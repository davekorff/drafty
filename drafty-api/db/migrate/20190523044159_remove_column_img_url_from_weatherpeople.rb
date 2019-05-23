class RemoveColumnImgUrlFromWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    remove_column :weatherpeople, :img_url, :string
  end
end
