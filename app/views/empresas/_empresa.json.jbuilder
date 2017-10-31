json.extract! empresa, :id, :nombre, :ruc, :ubicacion, :telefono, :email, :created_at, :updated_at
json.url empresa_url(empresa, format: :json)
