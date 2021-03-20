class AddIndexToSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_index :subscriptions, [:subscriber_id, :subscribable_type, :subscribable_id], unique: true, name: "index_subscriptions_on_subscriber_subscriptions"
  end
end
