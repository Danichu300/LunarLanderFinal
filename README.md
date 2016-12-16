#DESARROLLO DEL LUNAR LANDER

En este documento voy a ir _documentando_ el desarrollo del videojuego **Lunar Lander** cuyo _cliente_ es **Lansana Barry**:

####FONDO DE PANTALLA

El **fondo** del videojuego ha sido colocado **correctamente**. Como la imagen de fodo era _repetitiva_ ha quedado visualmente bien.

####SUELO LUNAR

El **suelo lunar** se ha implementado correctamente en ambos modelos del videojuego.

####TABLA INFORMATIVA

El juego contiene **una tabla**  que informan al jugador sobre la velocidad, altura y nivel de combustible actual de la nave. Así el jugador en todo momento tiene un **control total de la situación**. La tabla presenta está situada en la parte superior izquierda de la pantalla. 

####PANEL DE INSTRUCCIONES

Las instrucciones del videojuego se pueden ver haciendo click a **Instrucciones**.

####ICONOS

Los iconos en el _modelo horizontal_ se muestran separados a una distancia mas o menos equivalente y con tamaño parecido. Estas pequeñas diferencias se debe a que el tamaño está regulado mediante píxeles y no a porcentajes. Esto se debe a la _comodidad_ de ajustar las posiciones de esta manera. Igualmente como se menciona en el apartado de _PROBLEMAS ENCONTRADOS_ hay cierta diferencia entre los dos ordenadores en los que se  opera, por lo que a veces resulta lioso para el trabajo. En el _modelo vertical_ los iconos se ven mucho mas grandes debido a que en la diferencia de formato se pierde tamaño y se ha tenido que ajustar a un tamaño apropiado al de la punta de los dedos de forma estándar ya que cada jugador tiene un tamaño diferente de dedos y sea cómodo visualmente y táctilmente.

####ABOUT

Se ha creado **un html aparte** para el apartado del _About..._Aquí se muestra el desarrollador del videojuego, el cliente y las fuentes de información acudidas para la realización del proyecto.

####PROBLEMAS ENCONTRADOS

- Hay un cierto **desorden** entre equipos. En el _ordenador del instituto_ no funciona como debería el código (todo se ve **descolocado**, las imágenes se muestran en **proporciones diferentes**, hay que **cambiar las dimensiones**...) respecto a mi _ordenador personal_.

- Hay un **icnono sin especificar su uso**. En el documento original, el cliente me ha adjudicado un icono **REPLAY** el cual no aparece en ninguno de los bocetos del videojuego que me ha enviado ni en las especificaciones dice donde ponerlo ni su uso ni nada. Por lo tanto, este icono **no lo usaré**, excepto si le encuentro _utilidad o necesidad_.

- Faltan iconos en los archivos adjuntos del cliente. Por ello, en el apartado siguiente se especifican dichos iconos y cuales se han usado.

#### CAMBIOS RESPECTO AL PROYECTO ORIGINAL

- Como el cliente me había proporcionado un **icono** sin especificar su uso (el de _replay_) se ha **sustituido** por una flecha azul para poder volver atrás al cambiar de página.

- En el documento original el **panel de fuel, velocidad y altura** aparece en la **parte inferior izquierda**, pero se ha tenido que colocar en la **parte superior izquierda** para que se vea mejor con el contraste de color de la letra con el fondo y así aprovechar el espacio para poner un apartado de _About_.

- Se ha añadido un _sprite_ de **nave con fuego** para que se active cuando la nave sube. Además se ha implementado una **explosión** para cuando la nave aterrice con una velocidad mayor que la permitida (v>3) o se haya quedado sin fuel. Estos son los iconos que, como se ha mencionado en el apartado anterior, son los que faltan y son necesarios.

####JAVASCRIPT

En el Javascript se han implementado las funciones de encender y apagar el motor, así como unas funciones que regulan que se muestre y se vaya actualizando el nivel de combustible, la altura y la velocidad. Cuenta con unas variables tales como la altura, la velocidad y el fuel junto con una _booleana_ para regular que se pare la nave en caso de que falte combustible. Los mecanismos de funcionalidad se regulan mediante estructuras condicionales y punteros de elementos.

####RESULTADO FINAL: QUÉ HACE Y QUÉ NO HACE LA NAVE

La nave desciende y se eleva perfectamente. El combustible también se vacía satisfactoriamente. El aterrizaje se realiza con éxito. El cambio de sprite y la explosión están implementados pero comentados ya que no funcionan por un simple error sintáctico que no se encuentra, pero el código en sí está bien escrito.
