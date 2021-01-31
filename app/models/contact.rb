class Contact < ApplicationRecord
  validates :mail, presence: true
  validates :mail, format: { with: URI::MailTo::EMAIL_REGEXP }
end
