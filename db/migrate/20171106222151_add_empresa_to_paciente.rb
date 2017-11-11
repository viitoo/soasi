class AddEmpresaToPaciente < ActiveRecord::Migration[5.1]
  def change
    add_reference :pacientes, :empresa, foreign_key: true
  end
end
