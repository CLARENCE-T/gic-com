class AddDefaultValueToPictures < ActiveRecord::Migration[6.0]
  def change
    change_column :pictures, :classement, :integer, default: 1
  end
end
