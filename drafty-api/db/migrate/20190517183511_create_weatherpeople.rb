class CreateWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    create_table :weatherpeople do |t|
      t.string :name
      t.string :station
      t.string :city
      t.text :bio
      t.string :img_url

      t.timestamps
    end
  end
end
