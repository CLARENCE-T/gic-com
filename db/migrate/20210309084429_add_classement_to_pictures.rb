class AddClassementToPictures < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :classement, :integer, default: 1
  end
end
