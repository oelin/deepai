export default function getFormBoundry() {

    const nonce = btoa(Math.random().toString().slice(0, 12))
    const formBoundry = `WebKitFormBoundary${nonce}`

    return formBoundry
}
