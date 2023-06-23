const controller = {}; // esto hace que controlador se defina como objeto

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM customer", (err, customers) => { // hago un query de conexion con la base de datos y selecciono la tabla que usare
        if (err) {
          res.json(err); // si no me puede mostrar la tabla entonces enviara un json que notifique el error
        } 
        else {
          const renderedData = customers.map((customer, i) => { // con customers.map puedo transformar cada elemento del array
            return {
              i: i + 1, //defino lo que quiero que se muestre en la tabla
              nombre: customer.nombre,
              dirección: customer.dirección,
              telefono: customer.telefono,
              id: customer.id
            };
          });

          res.render("customers", {
            data: renderedData
          });
        }
      });
    });
  };
  

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
            res.redirect("/");
        })
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection ((err, conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, customer) => {
            res.render("customer_edit", {
                data: customer[0]
            })
        })
    })
}

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id], (err, rows) => {
            res.redirect("/");
        })
    })
}

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
            if (err) {
                res.status(500).json({ error: "Error al eliminar"})
            } else {
                res.redirect("/")
            }
        })
    })
}

module.exports = controller;