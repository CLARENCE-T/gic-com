class AddPositionToPictures < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :position, :integer
  end
end
