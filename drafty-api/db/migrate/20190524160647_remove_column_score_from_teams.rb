class RemoveColumnScoreFromTeams < ActiveRecord::Migration[5.2]
  def change
    remove_column :teams, :score, :integer
  end
end
