class Event < ApplicationRecord
  has_many :pictures
  has_attachments :photos, maximum: 10
  has_attachment  :avatar
end
