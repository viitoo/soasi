class Empresa < ApplicationRecord
  validates :nombre, presence: true
  validates :ruc, presence: true
  has_many :pacientes
end
