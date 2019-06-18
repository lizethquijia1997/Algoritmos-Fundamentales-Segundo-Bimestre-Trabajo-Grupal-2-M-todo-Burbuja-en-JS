
/***************ORDEN METODO BURBUJA****************/

function Burbuja(arreglo,n)
{
    var i,k,aux
    for (k  = 0; k < n; k++) {
       for  (i=0;i<(n-k);i++){
           if(arreglo[i]>arreglo[i+1]){
               aux = arreglo[i];
               arreglo[i]=arreglo[i+1];
               arreglo[i+1]=aux;

           }


       }
        
    }

    
}


function ingresarDatos (arreglo,n){
    for(var k=0; k<n; k++)
    {
        var datos = parseInt( prompt("INGRESA LOS ELEMENTOS"));//LINEA COMO UN COUT CUADRO DE TEXTO
        arreglo[k]= datos;
    }

}


function Principal ()
{
    var arreglo123=[];
    var n = parseInt( prompt("INGRESA EL TAMAÑO"));
    ingresarDatos(arreglo123,n);
    var t =arreglo123.length;//almacena el tamanio
    console.log("Arreglo inicial: "+arreglo123);//arreglo inicial
   
    Burbuja(arreglo123,t);
    console.log("Orden Burbuja: "+arreglo123);//arreglo burbuja

}

Principal ();// para llamar a la funcion

