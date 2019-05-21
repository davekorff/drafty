class RemoveColumnDraftedFromWeatherpeople < ActiveRecord::Migration[5.2]
  def change
    remove_column :weatherpeople, :drafted, :boolean
  end
end
