json.extract! empleado, :id, :nombre1, :nombre2, :apellido1, :apellido2, :tipo_identificacion, :numero_identificacion, :genero, :fecha_nacimiento, :lugar_nacimiento, :telefono, :email, :edo_civil, :created_at, :updated_at
json.url empleado_url(empleado, format: :json)
