class Picture < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  belongs_to :event
  has_one_attached :image
  validates :image, presence: true
end
