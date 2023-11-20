export default function getFormData(formBoundry, chatHistory) {

    formBoundry = `------${formBoundry}`
    chatHistory = JSON.stringify(chatHistory)
    
    const formData = `${formBoundry}\r\nContent-Disposition: form-data; name="chat_style"\r\n\r\nchat\r\n${formBoundry}\r\nContent-Disposition: form-data; name="chatHistory"\r\n\r\n${chatHistory}\r\n${formBoundry}--\r\n`

    return formData
}
