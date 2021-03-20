class RemoveIndexFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, :name
  end
end
