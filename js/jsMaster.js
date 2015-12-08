

function validar(id, atributo,tipo){
	
	if(atributo=='name'){
		switch(tipo){
			case 'rut' 		: 	$('[name="'+id+'"]').validCampoFranz('0123456789-k'); 
								break;
			case 'numero' 	: 	$('[name="'+id+'"]').validCampoFranz('0123456789');
								break;
			case 'letras' 	: 	$('[name="'+id+'"]').validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ���������� ');
								break;
			case 'letrasUsuario' 	: 	$('[name="'+id+'"]').validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ');
								break;
			case 'todo' 	: 	$('[name="'+id+'"]').validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ����������0123456789.-(),# ');
								break;
			case 'correo' 	: 	$('[name="'+id+'"]').validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ0123456789@_.-');
								break;
		}

	}else{
		if(atributo=='id'){
			switch(tipo){
				case 'rut' 		: 	$('#'+id).validCampoFranz('0123456789-k'); 
									break;
				case 'numero' 	: 	$('#'+id).validCampoFranz('0123456789');
									break;
				case 'letras' 	: 	$('#'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ���������� ');
									break;
				case 'letrasUsuario' 	: 	$('#'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ');
									break;
				case 'todo' 	: 	$('#'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ����������0123456789.-(),# ');
									break;
				case 'correo' 	: 	$('#'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ0123456789@_.-');
									break;
				case 'tipoProd' 	: 	$('#'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ0123456789@_abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ���������� .');
									break;
			}
		}
		if(atributo=='class'){
			switch(tipo){
				case 'rut' 		: 	$('.'+id).validCampoFranz('0123456789-k'); 
									break;
				case 'numero' 	: 	$('.'+id).validCampoFranz('0123456789');
									break;
				case 'letras' 	: 	$('.'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ���������� ');
									break;
				case 'letrasUsuario' 	: 	$('.'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ');
									break;
				case 'todo' 	: 	$('.'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ����������0123456789.-(),# ');
									break;
				case 'correo' 	: 	$('.'+id).validCampoFranz('abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ0123456789@_.-');
									break;
			}
		}
	}
	
}

