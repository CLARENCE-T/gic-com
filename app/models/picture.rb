class Picture < ApplicationRecord
  belongs_to :event
  has_one_attached :image
  validates :image, presence: true
  acts_as_list scope: :todo_list
end
