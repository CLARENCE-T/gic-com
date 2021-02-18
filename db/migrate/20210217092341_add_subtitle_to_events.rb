class AddSubtitleToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :subtitle, :text
  end
end
