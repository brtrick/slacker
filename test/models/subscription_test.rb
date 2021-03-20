# == Schema Information
#
# Table name: subscriptions
#
#  id                :bigint           not null, primary key
#  subscriber_id     :bigint           not null
#  subscribable_type :string           not null
#  subscribable_id   :bigint           not null
#  admin             :boolean          default(FALSE), not null
#  pending           :boolean          default(FALSE), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class SubscriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
