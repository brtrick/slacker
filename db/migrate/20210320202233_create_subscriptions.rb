class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.references :subscriber, foreign_key: {to_table: :users}, index: true, null: false
      t.references :subscribable, polymorphic: true, index: true, null: false
      t.boolean :admin, null:false, default: false
      t.boolean :pending, null:false, default: false

      t.timestamps null: false
    end
  end
end
