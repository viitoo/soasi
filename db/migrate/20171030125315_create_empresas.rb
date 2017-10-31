class CreateEmpresas < ActiveRecord::Migration[5.1]
  def change
    create_table :empresas do |t|
      t.string :nombre
      t.string :ruc
      t.text :ubicacion
      t.string :telefono
      t.string :email

      t.timestamps
    end
  end
end
