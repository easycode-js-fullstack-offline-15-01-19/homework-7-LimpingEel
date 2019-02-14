// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------

// Деструктурирующее присваивание. Задачи.

// #1
/**
 * @description Функция для сортировки букв
 * @param {Array} arguments
 * @returns {Object}
*/
function ltr() {
	let [ one, ...other ] = arguments
	let obj = {
		first: one,
		other: [other]
	}
	return obj
}

// #2
const organisation = {  
  name: 'Google',   
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};

/**
 * @description Функция для вывода имени и партнеров компании
 * @param {Object} organisation
 * @return 
*/

function getInfo(organisation) {
	let { name = 'unknown' } = organisation;
	let { info: { partners } } = organisation;
	let companyName = `Name: ${name}`;
	let partnersName = `Partners: ${partners}`;
	console.log(companyName);
	console.log(partnersName);

	return
}

// Функции стрелки. Задачи.

// #1
// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce(function (prev, next) { return prev + next; });
// }

/**
 * @description Функция для счёта суммы чисел
 * @param {Array} props
 * @return {Number}
*/


const sum = (...props) => {
	const params = Array.prototype.slice.call(props);
  	if (!params.length) return 0;
  	return params.reduce((prev, next) => { return prev + next; })
}