
export const AppMenus = {
    
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "path": "/home",
    "label": "Início",
    "icon": "home",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/municipes",
    "label": "Munícipes",
    "icon": "people",
    "iconcolor": "",
    "target": "",
    "submenu": []
  },
  {
    "path": "/anamnesepsi",
    "label": "Anamnese",
    "icon": "note",
    "iconcolor": "",
    "target": "",
    "submenu": []
  }
],
	anamnesepsilistheader: [
  {
    "label": "Paciente",
    "align": "left",
    "sortable": false,
    "name": "municipes_nome",
    "field": "municipes_nome"
  },
  {
    "label": "Sala",
    "align": "left",
    "sortable": false,
    "name": "escola",
    "field": "escola"
  },
  {
    "label": "Realização da ficha",
    "align": "left",
    "sortable": false,
    "name": "data_hora",
    "field": "data_hora"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	escola: [    
{value: "ARCANJO", label: "ARCANJO"},
	{value: "OLINTO", label: "OLINTO"}
    ],
	gostaApelido: [    
{value: "SIM", label: "SIM"},
	{value: "NÃO", label: "NÃO"}
    ],
	municipeslistheader: [
  {
    "label": "Nome",
    "align": "left",
    "sortable": false,
    "name": "nome",
    "field": "nome"
  },
  {
    "label": "Cpf",
    "align": "left",
    "sortable": false,
    "name": "cpf",
    "field": "cpf"
  },
  {
    "label": "Data Nasc",
    "align": "left",
    "sortable": false,
    "name": "data_nasc",
    "field": "data_nasc"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	userslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Name",
    "align": "left",
    "sortable": false,
    "name": "name",
    "field": "name"
  },
  {
    "label": "Image",
    "align": "left",
    "sortable": false,
    "name": "image",
    "field": "image"
  },
  {
    "label": "Phone",
    "align": "left",
    "sortable": false,
    "name": "phone",
    "field": "phone"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	usuarioslistheader: [
  {
    "label": "Id",
    "align": "left",
    "sortable": false,
    "name": "id",
    "field": "id"
  },
  {
    "label": "Login",
    "align": "left",
    "sortable": false,
    "name": "login",
    "field": "login"
  },
  {
    "label": "Senha",
    "align": "left",
    "sortable": false,
    "name": "senha",
    "field": "senha"
  },
  {
    "label": "Email",
    "align": "left",
    "sortable": false,
    "name": "email",
    "field": "email"
  },
  {
    "label": "Foto",
    "align": "left",
    "sortable": false,
    "name": "foto",
    "field": "foto"
  },
  {
    "label": "Nivel",
    "align": "left",
    "sortable": false,
    "name": "nivel",
    "field": "nivel"
  },
  {
    "label": "User Role Id",
    "align": "left",
    "sortable": false,
    "name": "user_role_id",
    "field": "user_role_id"
  },
  {
    "label": "Apagado Em",
    "align": "left",
    "sortable": false,
    "name": "apagado_em",
    "field": "apagado_em"
  },
  {
    "label": "Apagado",
    "align": "left",
    "sortable": false,
    "name": "apagado",
    "field": "apagado"
  },
  {
    "label": "Orgao",
    "align": "left",
    "sortable": false,
    "name": "orgao",
    "field": "orgao"
  },
  {
    "label": "Status",
    "align": "left",
    "sortable": false,
    "name": "status",
    "field": "status"
  },
  {
    "label": "Nome",
    "align": "left",
    "sortable": false,
    "name": "nome",
    "field": "nome"
  },
  {
    "label": "Suborgao",
    "align": "left",
    "sortable": false,
    "name": "suborgao",
    "field": "suborgao"
  },
  {
    "label": "",
    "align": "right",
    "sortable": false,
    "name": "btnactions",
    "field": ""
  }
],
	escola2: [{"label":"ARCANJO","value":"ARCANJO"},{"label":"OLINTO","value":"OLINTO"}],

    exportFormats: {
        print: {
			label: 'Print',
			color: 'blue',
            icon: 'print',
            id: 'print',
            ext: 'print',
        },
        pdf: {
			label: 'Pdf',
			color: 'red',
            icon: 'picture_as_pdf',
            id: 'pdf',
            ext: 'pdf',
        },
        excel: {
			label: 'Excel',
			color: 'green',
            icon: 'grid_on',
            id: 'excel',
            ext: 'xlsx',
        },
        csv: {
			label: 'Csv',
			color: 'teal',
            icon: 'grid_on',
            id: 'csv',
            ext: 'csv',
        },
    },
    
}