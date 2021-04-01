class Picture < ApplicationRecord
  belongs_to :event
  has_one_attached :image
  validates :image, presence: true
end
