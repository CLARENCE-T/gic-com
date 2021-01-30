class AddColumnToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :title, :string
    add_column :events, :description, :text
    add_column :events, :date, :date
  end
end
