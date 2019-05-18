class CreateDrafts < ActiveRecord::Migration[5.2]
  def change
    create_table :drafts do |t|
      t.references :user, foreign_key: true
      t.references :contest, foreign_key: true
      t.references :weatherperson, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
