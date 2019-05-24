class RemoveColumnScoreFromForecasts < ActiveRecord::Migration[5.2]
  def change
    remove_column :forecasts, :score, :integer
  end
end
