class ChangeDescriptionForChannels < ActiveRecord::Migration[5.2]
  def self.up
    change_column_null :channels, :description, true
  end

  def self.down
    change_column_null :channels, :description, false, "description"
  end
end
