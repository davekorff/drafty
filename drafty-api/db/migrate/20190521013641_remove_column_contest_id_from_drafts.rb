class RemoveColumnContestIdFromDrafts < ActiveRecord::Migration[5.2]
  def change
    remove_column :drafts, :contest_id, :integer
  end
end
