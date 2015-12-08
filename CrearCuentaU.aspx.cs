using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data.Objects;

namespace Chocoloco
{
    public partial class CrearCuentaU : System.Web.UI.Page
    {
        db_chocolateriaEntities5000 choco = new db_chocolateriaEntities5000();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string rut = txtRut.Text;
            Persona p = choco.Persona.FirstOrDefault(x => x.per_rut == rut);
            if (p == null)
            {
                Response.Write("<script>alert('usuario')</script>");
                p.per_rut = rut;
                p.per_nombre = txtNombre.Text;
                p.per_apellidoP = txtAp.Text;
                p.per_apellidoM = txtApM.Text;
                p.per_direccion = txtDireccion.Text;
                p.per_telefono = int.Parse(txtTelefono.Text);
               // p.per_fechaNac = txtFecha.Text;

            }
            else
            {
                Response.Write("<script>alert('Usuario ya registrado')</script>");
            }



            
        }
    }
}