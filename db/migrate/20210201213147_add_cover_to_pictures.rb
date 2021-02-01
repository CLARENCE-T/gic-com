class AddCoverToPictures < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :cover, :boolean, :default => false
  end
end
