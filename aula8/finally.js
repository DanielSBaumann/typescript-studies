function retornaHora(data) {
    if (data && !(data instanceof Date))
        throw new TypeError('Esperando instancia de date');
    if (!data)
        data = new Date();
    return data.toLocaleTimeString('pt-BR', { hour12: false })
}

try {
    const data = new Date('01-0-1970 12:58:13');
    const hora = retornaHora();
    console.log(hora);
    console.log(retornaHora(true));
} catch (error) {
    //console.log(error);
} finally {
    console.log('Bom dia!')
}