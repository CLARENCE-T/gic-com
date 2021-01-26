class CreateTalents < ActiveRecord::Migration[6.0]
  def change
    create_table :talents do |t|
      t.string :first_name
      t.string :last_name
      t.text :description
      t.string :status
      t.integer :age

      t.timestamps
    end
  end
end
