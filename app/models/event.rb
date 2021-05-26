class Event < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :title, presence: true
  has_many :pictures
end
