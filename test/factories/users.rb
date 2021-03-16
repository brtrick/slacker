# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  full_name       :string           not null
#  display_name    :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
FactoryBot.define do
  factory :user do
    full_name { "MyString" }
    display_name { "MyString" }
    email { "MyString" }
    password_digest { "MyString" }
    session_token { "MyString" }
  end
end
