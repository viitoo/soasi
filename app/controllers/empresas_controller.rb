class EmpresasController < ApplicationController
  before_action :set_empresa, only: %i[show edit update destroy]
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Empresas', :empresas_path
  skip_before_action :verify_authenticity_token

  def getjson
    render = render json: Empresa.find_by_sql(['SELECT * FROM empresas WHERE nombre LIKE ? OR ruc LIKE ?', "%#{params[:nombre]}%", "%#{params[:ruc]}%"])
  end

  def index
    add_breadcrumb 'index'
    # @empresas = Empresa.paginate(:page => params[:page],per_page: 30)
  end

  def show
    add_breadcrumb 'Mostrar'
  end

  def new
    add_breadcrumb 'Nuevo', new_empresa_path

    @empresa = Empresa.new
  end

  def edit
    add_breadcrumb 'Nuevo', edit_empresa_path
  end

  def create
    @empresa = Empresa.new(empresa_params)

    respond_to do |format|
      if @empresa.save
        format.html { redirect_to @empresa, notice: 'Empresa was successfully created.' }
         #format.json { render :show, status: :created, location: @empresa }
      else
        #format.html { render :new }
       # render json: {errors:  @empresa.errors}, status: :unprocessable_entity
        format.json { render json: @empresa.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @empresa.update(empresa_params)
        format.html { redirect_to @empresa, notice: 'Empresa was successfully updated.' }
        format.json { render :show, status: :ok, location: @empresa }
      else
        format.html { render :edit }
        format.json { render json: @empresa.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @empresa.destroy
    respond_to do |format|
      format.html { redirect_to empresas_url, notice: 'Empresa was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_empresa
    @empresa = Empresa.find(params[:id])
  end

  def empresa_params
    params.require(:empresa).permit(:nombre, :ruc, :ubicacion, :telefono, :email, pacientes_attributes:
     [:id, :primer_nombre, :segundo_nombre, :primer_apellido, :segundo_apellido, :tipo_identificacion,
      :numero_identificacion,:genero, :fecha_nac, :lugar_nacimiento, :telefono, :grupo_sangre, :edo_civil , :_destroy])
  end
end
