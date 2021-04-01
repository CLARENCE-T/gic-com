class RemovePositionFromPictures < ActiveRecord::Migration[6.0]
  def change
    remove_column :pictures, :position, :integer
  end
end
