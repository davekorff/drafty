class RemoveColumnBalanceFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :balance, :integer
  end
end
