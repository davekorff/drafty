class CreateForecasts < ActiveRecord::Migration[5.2]
  def change
    create_table :forecasts do |t|
      t.references :weatherperson, foreign_key: true
      t.date :date
      t.integer :predicted_temp
      t.integer :actual_temp
      t.string :predicted_weather
      t.string :actual_weather
      t.integer :score

      t.timestamps
    end
  end
end
