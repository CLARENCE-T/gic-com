class AddShowroomToPictures < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :showroom, :boolean, default: false
  end
end
