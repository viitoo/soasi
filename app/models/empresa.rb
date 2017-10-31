class Empresa < ApplicationRecord
  validates :nombre, presence: true
end
