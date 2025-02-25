async function sendForm (url, data) {
    try {

        const response = await fetch(url, {
            method: 'POST',
            body: data
        })
        if(!response.ok) {
            throw new Error(`Ошибка сервера ${response.status}: ${response.statusText}`)
        }
        return await response.text()

    } catch (error) {
        console.error(`Ошибка отправки ${error}`)
        throw error
    }
}

async function getCards (url) {
    try {
        const response = await fetch (url)
        if(!response.ok) {
            throw new Error(`Ошибка сервера ${url}: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.log(`Ошибка отправки ${error}`)
        throw error
    }
}

export {sendForm, getCards}