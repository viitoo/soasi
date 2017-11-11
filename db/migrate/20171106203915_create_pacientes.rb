class CreatePacientes < ActiveRecord::Migration[5.1]
  def change
    create_table :pacientes do |t|
      t.string :primer_nombre
      t.string :segundo_nombre
      t.string :primer_apellido
      t.string :segundo_apellido
      t.string :tipo_identificacion
      t.string :numero_identificacion
      t.string :genero
      t.date :fecha_nac
      t.string :lugar_nacimiento
      t.string :telefono
      t.string :grupo_sangre
      t.string :edo_civil

      t.timestamps
    end
  end
end
