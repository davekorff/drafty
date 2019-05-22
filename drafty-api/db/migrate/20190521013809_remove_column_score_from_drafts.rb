class RemoveColumnScoreFromDrafts < ActiveRecord::Migration[5.2]
  def change
    remove_column :drafts, :score, :integer
  end
end
