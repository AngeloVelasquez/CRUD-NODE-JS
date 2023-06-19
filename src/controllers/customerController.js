const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer", (err, customers) => {
            if(err) {
                res.json(err);
            }
            res.render("customers", {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
            res.redirect("/");
        });
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection ((err, conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, customer) => {
            res.render("customer_edit", {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id], (err, rows) => {
            res.redirect("/");
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
            res.redirect("/");
        });
    });
};

controller.show = (req, res) => {
    res.render ("customers")
    data: customers
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer", (customers) => {
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    const id = i + 1
                    const nombre = data[i].nombre
                    const dirección = data[i].dirección
                    const telefono = data[i].telefono

                    const  div = document.createElement("div");
                    div1.appendChild(id);
                    div2.appendChild(nombre);
                    div3.appendChild(dirección);
                    div4.appendChild(telefono);
                }

                function traerdatos() {
                    fetch("/show")
                    .then((res) => res.json())
                    .then((data) => {
                        controller.show;
                    })
                }
            }
            
        });
    });
}


    



module.exports = controller;