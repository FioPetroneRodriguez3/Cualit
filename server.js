var express = require('express')
var http = require('http')
var app = express()

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



let credentials = {
 "email": "demo@cualit.com",
 "password": "facturasimple"
};

let response = {
	"success":true,
	"message":"Aquí está su token para la API de eFactura.Tenga ud. un buen día!",
	"identifica_usuarios_por_pin":false,
	"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJub21icmUiOiJEZW1vIEFkbWluIiwic3VjdXJzYWxfYWN0dWFsIjoiNTg2MTVjOTFjMDFkZWQwZDM0MDM3YzViIiwiYXBlbGxpZG8iOiJVc3VhcmlvIiwiZW1haWwiOiJkZW1vQGN1YWxpdC5jb20iLCJub21icmVfdXN1YXJpbyI6InVzdWFyaW9fZGVtbyIsImlhdCI6MTYyMzcxODk2MiwiZXhwIjoxNjI0MjQ0NTYyLCJzdWIiOiJkZW1vQGN1YWxpdC5jb20ifQ.QG6cu0z_ZkQL2WIidGVDpbRIRCYmf3JbKojjmdWDkBM"
}
app.post('/', function (req, res) {
  	credentials = {
    	email: req.body.email,
    	pasword: req.body.password
	}
	res.send(credentials);
  };

  app.get('/', function (req, res) {
  	respuesta = {
    	"success":true,
		"message":"Aquí está su token para la API de eFactura.Tenga ud. un buen día!",
		"identifica_usuarios_por_pin":false,
		"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJub21icmUiOiJEZW1vIEFkbWluIiwic3VjdXJzYWxfYWN0dWFsIjoiNTg2MTVjOTFjMDFkZWQwZDM0MDM3YzViIiwiYXBlbGxpZG8iOiJVc3VhcmlvIiwiZW1haWwiOiJkZW1vQGN1YWxpdC5jb20iLCJub21icmVfdXN1YXJpbyI6InVzdWFyaW9fZGVtbyIsImlhdCI6MTYyMzcxODk2MiwiZXhwIjoxNjI0MjQ0NTYyLCJzdWIiOiJkZW1vQGN1YWxpdC5jb20ifQ.QG6cu0z_ZkQL2WIidGVDpbRIRCYmf3JbKojjmdWDkBM"

	}
	res.send(respuesta);
  };




