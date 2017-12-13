require 'test_helper'

class EmpleadosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @empleado = empleados(:one)
  end

  test "should get index" do
    get empleados_url
    assert_response :success
  end

  test "should get new" do
    get new_empleado_url
    assert_response :success
  end

  test "should create empleado" do
    assert_difference('Empleado.count') do
      post empleados_url, params: { empleado: { apellido1: @empleado.apellido1, apellido2: @empleado.apellido2, edo_civil: @empleado.edo_civil, email: @empleado.email, fecha_nacimiento: @empleado.fecha_nacimiento, genero: @empleado.genero, lugar_nacimiento: @empleado.lugar_nacimiento, nombre1: @empleado.nombre1, nombre2: @empleado.nombre2, numero_identificacion: @empleado.numero_identificacion, telefono: @empleado.telefono, tipo_identificacion: @empleado.tipo_identificacion } }
    end

    assert_redirected_to empleado_url(Empleado.last)
  end

  test "should show empleado" do
    get empleado_url(@empleado)
    assert_response :success
  end

  test "should get edit" do
    get edit_empleado_url(@empleado)
    assert_response :success
  end

  test "should update empleado" do
    patch empleado_url(@empleado), params: { empleado: { apellido1: @empleado.apellido1, apellido2: @empleado.apellido2, edo_civil: @empleado.edo_civil, email: @empleado.email, fecha_nacimiento: @empleado.fecha_nacimiento, genero: @empleado.genero, lugar_nacimiento: @empleado.lugar_nacimiento, nombre1: @empleado.nombre1, nombre2: @empleado.nombre2, numero_identificacion: @empleado.numero_identificacion, telefono: @empleado.telefono, tipo_identificacion: @empleado.tipo_identificacion } }
    assert_redirected_to empleado_url(@empleado)
  end

  test "should destroy empleado" do
    assert_difference('Empleado.count', -1) do
      delete empleado_url(@empleado)
    end

    assert_redirected_to empleados_url
  end
end
