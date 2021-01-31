class Talent < ApplicationRecord
  has_one_attached :images
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :images, presence: true

end
