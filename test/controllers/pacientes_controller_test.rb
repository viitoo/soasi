require 'test_helper'

class PacientesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @paciente = pacientes(:one)
  end

  test "should get index" do
    get pacientes_url
    assert_response :success
  end

  test "should get new" do
    get new_paciente_url
    assert_response :success
  end

  test "should create paciente" do
    assert_difference('Paciente.count') do
      post pacientes_url, params: { paciente: { edo_civil: @paciente.edo_civil, fecha_nac: @paciente.fecha_nac, genero: @paciente.genero, grupo_sangre: @paciente.grupo_sangre, lugar_nacimiento: @paciente.lugar_nacimiento, numero_identificacion: @paciente.numero_identificacion, primer_apellido: @paciente.primer_apellido, primer_nombre: @paciente.primer_nombre, segundo_apellido: @paciente.segundo_apellido, segundo_nombre: @paciente.segundo_nombre, telefono: @paciente.telefono, tipo_identificacion: @paciente.tipo_identificacion } }
    end

    assert_redirected_to paciente_url(Paciente.last)
  end

  test "should show paciente" do
    get paciente_url(@paciente)
    assert_response :success
  end

  test "should get edit" do
    get edit_paciente_url(@paciente)
    assert_response :success
  end

  test "should update paciente" do
    patch paciente_url(@paciente), params: { paciente: { edo_civil: @paciente.edo_civil, fecha_nac: @paciente.fecha_nac, genero: @paciente.genero, grupo_sangre: @paciente.grupo_sangre, lugar_nacimiento: @paciente.lugar_nacimiento, numero_identificacion: @paciente.numero_identificacion, primer_apellido: @paciente.primer_apellido, primer_nombre: @paciente.primer_nombre, segundo_apellido: @paciente.segundo_apellido, segundo_nombre: @paciente.segundo_nombre, telefono: @paciente.telefono, tipo_identificacion: @paciente.tipo_identificacion } }
    assert_redirected_to paciente_url(@paciente)
  end

  test "should destroy paciente" do
    assert_difference('Paciente.count', -1) do
      delete paciente_url(@paciente)
    end

    assert_redirected_to pacientes_url
  end
end
