# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :text             not null
#  workspace_id :bigint           not null
#  private      :boolean          default(FALSE), not null
#  dm           :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
  belongs_to :workspace
end
