class Empresa < ApplicationRecord
  validates :nombre, presence: true
  validates :ruc, presence: true
  has_many :pacientes, dependent: :destroy
  accepts_nested_attributes_for :pacientes, allow_destroy: true
end
