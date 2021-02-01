class Picture < ApplicationRecord
  belongs_to :event
  has_one_attached :image
  validates :images, presence: true
end
