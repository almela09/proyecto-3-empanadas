


// export const fn = (tres, cuatro, cinco) => {
//   let total = 0
//   let base = 6
//   if (cinco + cuatro + tres > 40) {
//     // console.log("son mas de 40 empanadas")
//     throw new Error("son mas de 40 empanadas")
//   }

//   if ((cinco + cuatro + tres) % 3 != 0) {
//     // console.log("no es multiplo de 3")
//     throw new Error("no es multiplo de 3")
//   }

//   if (cinco < 0 || cuatro < 0 || tres < 0) {
//     // console.log("hay un numero negativo")
//     throw new Error("hay un numero negativo")
//   }

//   while (cinco >= 3) {
//     cinco = cinco - 3
//     total += base + 10
//   }
//   while (cuatro >= 3) {
//     cuatro -= 3
//     total += base + 8
//   }
//   while (tres >= 3) {
//     tres -= 3
//     total += base + 6
//   }
//   while (cinco + cuatro + tres > 0) {
//     let cuenta = 0
//     let cuentaTotal = 0
//     while (cuenta < 3) {
//       // alert(cuenta);
//       if (cinco > 0 && tres > 0) {
//         cinco -= 0.5
//         tres -= 0.5
//         cuenta += 1
//         cuentaTotal = base + 8
//         if (cuentaTotal < base + 8) {
//           cuentaTotal = base + 8
//         }
//       } else if (cuatro > 0 && tres > 0) {
//         cuatro -= 0.5
//         tres -= 0.5
//         cuenta += 1
//         if (cuentaTotal < base + 7) {
//           cuentaTotal = base + 7
//         }
//       } else if (cinco > 0 && cuatro > 0) {
//         cinco -= 0.5
//         cuatro -= 0.5
//         cuenta += 1
//         if (cuentaTotal < base + 9) {
//           cuentaTotal = base + 9
//         }
//       } else if (cinco > 0) {
//         cinco -= 1
//         cuenta += 1
//         cuentaTotal = base + 10
//       } else if (cuatro > 0) {
//         cuatro -= 1
//         cuenta += 1
//         if (cuentaTotal < base + 8) {
//           cuentaTotal = base + 8
//         }
//       } else if (tres > 0) {
//         tres -= 1
//         cuenta += 1
//         if (cuentaTotal < base + 6) {
//           cuentaTotal = base + 6
//         }
//       } else {
//         // console.log("va chungo, error")
//       }
//       if (cuenta > 2) {
//         total += cuentaTotal
//       }
//     }
//   }
//   // console.log(total)
//   return total
// }



//fn(1, 1, 1)
// fn(3, 3, 0)
// fn(2, 0, 1)
// fn(9, 10, 11)
// fn(-1, 3, 1)
// fn(2, 2, 1)
// fn(15, 15, 20)


export const fn = (tres, cuatro, cinco) => {
  let total = 0; //precio total que pagaremos
  const base = 6; //precio base de empanada
  const ingrediente = 2; //precio por ingrediente
  const empanadas_por_pack = 3; //numero de empanadas que nos llevamos cada vez
  
  //tipos de empanadas, total en venta y numero de ingredientes
  let tiposempanada = { 
    "tres" : {"total" : 0, "ingredientes" : 3}, 
	"cuatro" : {"total" : 0, "ingredientes" : 4}, 
	"cinco" : {"total" : 0, "ingredientes" : 5} 
  }
  
  //total de empanadas que tenemos
  tiposempanada["tres"]["total"] = tres;
  tiposempanada["cuatro"]["total"] = cuatro;
  tiposempanada["cinco"]["total"] = cinco;
  
  //errores
  if (tiposempanada["cinco"]["total"] + tiposempanada["cuatro"]["total"] + tiposempanada["tres"]["total"] >= 40) {
    throw new Error("son mas de 40 empanadas");
  }
  else if ((tiposempanada["cinco"]["total"] + tiposempanada["cuatro"]["total"] + tiposempanada["tres"]["total"]) % 3 != 0) {
    throw new Error("no es multiplo de 3");
  }
  else if (tiposempanada["cinco"]["total"] < 0 ||  tiposempanada["cuatro"]["total"] < 0 || tiposempanada["tres"]["total"] < 0) {
    throw new Error("hay un numero negativo");
  }

  //mientras tengamos 3 o más empanadas iguales, nos las quitamos juntas ya que así sacamos el maximo (2x1)
  while (tiposempanada["cinco"]["total"] >= empanadas_por_pack) {
    tiposempanada["cinco"]["total"] -= empanadas_por_pack;
    total += base + (tiposempanada["cinco"]["ingredientes"] * ingrediente);
  }
  while (tiposempanada["cuatro"]["total"] >= empanadas_por_pack) {
    tiposempanada["cuatro"]["total"] -= empanadas_por_pack;
    total += base + (tiposempanada["cuatro"]["ingredientes"] * ingrediente);
  }
  while (tiposempanada["tres"]["total"] >= empanadas_por_pack) {
    tiposempanada["tres"]["total"] -= empanadas_por_pack;
    total += base + (tiposempanada["tres"]["ingredientes"] * ingrediente)
  }
  
  //si todavía nos han quedado empanadas por llevarnos, hacemos mitad y mitad siempre que podamos, restando 0.5 al total de empanadas
  while (tiposempanada["cinco"]["total"] + tiposempanada["cuatro"]["total"] + tiposempanada["tres"]["total"] > 0) {
    let cuenta = 0; //contador de empanadas. si es > empanadas_por_pack (3 en nuestro caso) volverá a 0 para hacer otro pack de 3
    let cuentaTotal = 0; //precio de la empanada de mayor valor del actual pack de empanadas.
	// aquí guardaremos el precio de las empanadas mitad y mitad, que varía depende de la combinación
	// precio = base + ( ( (ingredientes_empanada_1 + ingredientes_empanada_2) / 2 ) * ingrediente)
	// o de la empanada entera si no queda otra opción
	let precio = 0;
	
    while (cuenta < empanadas_por_pack) {
      if (tiposempanada["cinco"]["total"] > 0 && tiposempanada["tres"]["total"] > 0) { //procesamos media de 5 ing. y media de 3 ing. si es posible
	  
        tiposempanada["cinco"]["total"] -= 0.5; //restamos media empanada
        tiposempanada["tres"]["total"] -= 0.5; //restamos media empanada
        cuenta += 1; //sumamos 1 a la cuenta de empanadas de este pack de 3
		//calculamos el precio de este mix basado en los ingredientes que lleva cada una
		precio = base + ( ( (tiposempanada["cinco"]["ingredientes"] + tiposempanada["tres"]["ingredientes"]) / 2 ) * ingrediente );
		
      } else if (tiposempanada["cuatro"]["total"] > 0 && tiposempanada["tres"]["total"] > 0) { //procesamos media de 4 ing. y media de 3 ing. si es posible
	  
        tiposempanada["cuatro"]["total"] -= 0.5;
        tiposempanada["tres"]["total"] -= 0.5;
        cuenta += 1
        precio = base + ( ( (tiposempanada["cuatro"]["ingredientes"] + tiposempanada["tres"]["ingredientes"]) / 2 ) * ingrediente );
		
      } else if (tiposempanada["cinco"]["total"] > 0 && tiposempanada["cuatro"]["total"] > 0) { //procesamos media de 5 ing. y media de 4 ing. si es posible
	  
        tiposempanada["cinco"]["total"] -= 0.5
        tiposempanada["cuatro"]["total"] -= 0.5
        cuenta += 1
        precio = base + ( ( (tiposempanada["cinco"]["ingredientes"] + tiposempanada["cuatro"]["ingredientes"]) / 2 ) * ingrediente );
		
      } else if (tiposempanada["cinco"]["total"] > 0) { //y finalmente las empanadas sueltas que no podemos emparejar mitad y mitad
        tiposempanada["cinco"]["total"] -= 1
        cuenta += 1
        precio = base + (tiposempanada["cinco"]["ingredientes"] * ingrediente);
      } else if (tiposempanada["cuatro"]["total"] > 0) {
        tiposempanada["cuatro"]["total"] -= 1;
        cuenta += 1;
        precio = base + (tiposempanada["cuatro"]["ingredientes"] * ingrediente);
      } else if (tiposempanada["tres"]["total"] > 0) {
	  
        tiposempanada["tres"]["total"] -= 1;
        cuenta += 1;
		precio = base + (tiposempanada["tres"]["ingredientes"] * ingrediente);
      } else {
        throw new Error("si llegamos aquí algo va realmente mal");
      }
	  
	  //comprobamos si el precio de la nueva empanada del pack es mayor que el mayor hasta ahora
	  //si es así, este es el nuevo precio ya que siempre pagamos la más cara
	  if (cuentaTotal < precio) {
          cuentaTotal = precio;
        }
	  
	  //si esta es la última empanada del pack, actualizamos el total a pagar sumando el precio de este pack (cuentaTotal)
      if (cuenta == empanadas_por_pack) {
        total += cuentaTotal;
      }
    }
  }
  return total
}















