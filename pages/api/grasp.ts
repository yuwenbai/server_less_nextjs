export const getInfo = async () => {
    return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('aaa')
		}, 1000)
	})
    
}