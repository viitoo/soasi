module ApplicationHelper

  def cabezera_nombre
    case  params[:controller]
    when "empresas"
      if params[:action] == 'new'
        "Registrar "+params[:controller].capitalize
      elsif params[:action] == 'edit'
        "Editar "+params[:controller].capitalize
      elsif params[:action] == 'index'
        "Listado de "+params[:controller].capitalize
      else params[:action] == 'new'
        params[:controller].capitalize
      end
    end
  end



end
