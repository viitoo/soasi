class CreateEmpleados < ActiveRecord::Migration[5.1]
  def change
    create_table :empleados do |t|
      t.string :nombre1
      t.string :nombre2
      t.string :apellido1
      t.string :apellido2
      t.string :tipo_identificacion
      t.string :numero_identificacion
      t.string :genero
      t.date :fecha_nacimiento
      t.string :lugar_nacimiento
      t.string :telefono
      t.string :email
      t.string :edo_civil

      t.timestamps
    end
  end
end
