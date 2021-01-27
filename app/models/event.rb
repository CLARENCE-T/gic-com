class Event < ApplicationRecord
  has_many :pictures
  has_many_attached :images
end
