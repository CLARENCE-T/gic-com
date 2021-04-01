class Event < ApplicationRecord
  validates :title, presence: true
  has_many :pictures, -> { order(position: :asc) }
end
