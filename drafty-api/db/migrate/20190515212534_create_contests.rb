class CreateContests < ActiveRecord::Migration[5.2]
  def change
    create_table :contests do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :prize

      t.timestamps
    end
  end
end
