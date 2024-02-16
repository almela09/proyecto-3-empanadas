


export const fn = (tres, cuatro, cinco) => {
    let total = 0
    let base = 6
    if (cinco + cuatro + tres > 40) {
      console.log("son mas de 40 empanadas")
      throw new Error("son mas de 40 empanadas")
    }
  
    if ((cinco + cuatro + tres) % 3 != 0) {
      console.log("no es multiplo de 3")
      throw new Error("no es multiplo de 3")
    }
  
    if (cinco < 0 || cuatro < 0 || tres < 0) {
      console.log("hay un numero negativo")
      throw new  Error("hay un numero negativo")
    }
  
    while (cinco >= 3) {
      cinco = cinco - 3
      total += base + 10
    }
    while (cuatro >= 3) {
      cuatro -= 3
      total += base + 8
    }
    while (tres >= 3) {
      tres -= 3
      total += base + 6
    }
    while (cinco + cuatro + tres > 0) {
      let cuenta = 0
      let cuentaTotal = 0
      while (cuenta < 3) {
        // alert(cuenta);
        if (cinco > 0 && tres > 0) {
          cinco -= 0.5
          tres -= 0.5
          cuenta += 1
          cuentaTotal = base + 8
          if (cuentaTotal < base + 8) {
            cuentaTotal = base + 8
          }
        } else if (cuatro > 0 && tres > 0) {
          cuatro -= 0.5
          tres -= 0.5
          cuenta += 1
          if (cuentaTotal < base + 7) {
            cuentaTotal = base + 7
          }
        } else if (cinco > 0 && cuatro > 0) {
          cinco -= 0.5
          cuatro -= 0.5
          cuenta += 1
          if (cuentaTotal < base + 9) {
            cuentaTotal = base + 9
          }
        } else if (cinco > 0) {
          cinco -= 1
          cuenta += 1
          cuentaTotal = base + 10
        } else if (cuatro > 0) {
          cuatro -= 1
          cuenta += 1
          if (cuentaTotal < base + 8) {
            cuentaTotal = base + 8
          }
        } else if (tres > 0) {
          tres -= 1
          cuenta += 1
          if (cuentaTotal < base + 6) {
            cuentaTotal = base + 6
          }
        } else {
          console.log("va chungo, error")
        }
        if (cuenta > 2) {
          total += cuentaTotal
        }
      }
    }
    console.log(total)
    return total
  }


  
  //fn(1, 1, 1)
  // fn(3, 3, 0)
  // fn(2, 0, 1)
  // fn(9, 10, 11)
  // fn(-1, 3, 1)
  // fn(2, 2, 1)
  // fn(15, 15, 20)


  /*
  
  Añadir cuentas y explicación del código mañana
  
  
  
  
  
  
  
  */