testBin()

function testBin () {
	for (let x of genBin(5)) {
		console.log(x)
	}
}

function* genBin(n)
{
	let i = 0
	const maxValue = Math.pow(3, n)

	while (true) {

		if (i === maxValue) return

		let array = i.toString(3).split('')

		const length = array.length
		if (length < n) {
			for (let j = 0; j < (n - length); j++) {
				array.unshift('0')
			}
		}

		i++
		yield array
	}
}