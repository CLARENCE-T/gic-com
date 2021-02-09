class AddColumnToAbouts < ActiveRecord::Migration[6.0]
  def change
    add_column :abouts, :presentation, :text
  end
end
