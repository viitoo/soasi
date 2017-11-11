json.extract! paciente, :id, :primer_nombre, :segundo_nombre, :primer_apellido, :segundo_apellido, :tipo_identificacion, :numero_identificacion, :genero, :fecha_nac, :lugar_nacimiento, :telefono, :grupo_sangre, :edo_civil, :created_at, :updated_at
json.url paciente_url(paciente, format: :json)
