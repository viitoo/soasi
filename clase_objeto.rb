class Tienda
  attr_accessor :robo
  attr_accessor :articulo
  def initialize(robo, articulo)
    @robo = robo
    @articulo = articulo
  end
  def vender
      a = (@robo.to_i-@articulo.to_i)+@articulo.to_i
      puts "a ti te robaron al final : $"+a.to_s

  end
end

puts "Cuanto te robaron?"
robado = gets.chomp
puts "Cuanto cuesta el articulo que te compraron con el dinero robado"
articulo = gets.chomp
vendedor = Tienda.new(robado, articulo)
vendedor.vender

