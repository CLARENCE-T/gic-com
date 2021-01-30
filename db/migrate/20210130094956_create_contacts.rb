class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :mail
      t.string :city
      t.integer :age
      t.date :was_born

      t.timestamps
    end
  end
end
