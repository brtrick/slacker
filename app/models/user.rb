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
class User < ApplicationRecord
    validates   :full_name, :email, :password_digest, :session_token, 
                presence: true
    validates   :email, :session_token, uniqueness: true
    validates   :password, length: {minimum: 6, allow_nil: true}
    
    before_validation :ensure_session_token
    attr_reader :password

    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        session_token
    end

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        (user && user.is_password?(pw)) ? user : nil
    end

    def is_password?(pw)
        pw_obj = BCrypt::Password.new(password_digest)
        pw_obj.is_password?(pw)
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end
end
