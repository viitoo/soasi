class Empresa < ApplicationRecord
  validates :nombre, presence: true
  validates :ruc, presence: true
  has_many :pacientes

  def self.search(search)
    if search
      where('nombre LIKE ?', "%#{search}%")
    else
      all
    end
  end

end
