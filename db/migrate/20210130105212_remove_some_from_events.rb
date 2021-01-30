class RemoveSomeFromEvents < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :description, :text
    remove_column :events, :date, :date
    remove_column :events, :title, :string
  end
end
