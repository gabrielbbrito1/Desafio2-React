import React, { Component } from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';


const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};
const date = new Intl.DateTimeFormat([], options);
console.log(date.format(new Date()));

<html>
	<body>
		<div id="data-hora"></div>
		<script>
			const zeroFill = n => {
				return ('0' + n).slice(-2);
			}

			const interval = setInterval(() => {
				// Pega o horário atual
				const now = new Date();

				// Formata a data conforme dd/mm/aaaa hh:ii:ss
				const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

				// Exibe na tela usando a div#data-hora
				document.getElementById('data-hora').innerHTML = dataHora;
			}, 1000);
		</script>
	</body>
</html>


  
export default Relogio;