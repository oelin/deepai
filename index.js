import fetch from 'chiaki'

import getUserAgent from './get-user-agent.js'
import getAPIKey from './get-api-key.js'
import getFormBoundry from './get-form-boundry.js'
import getFormData from './get-form-data.js'


export default function DeepAI() {
    return {
	chat: {
	    completions: {
		async create(model, messages) {
		    
		    const userAgent = getUserAgent()
		    const apiKey = getAPIKey(userAgent)
		    const formBoundry = getFormBoundry()

		    const options = {
			hostname: 'api.deepai.org',
			path: '/hacking_is_a_serious_crime',
			method: 'POST',
			headers: {
			    'api-key': apiKey,	
			    'content-type': `multipart/form-data; boundary=${formBoundry}`,
			    'user-agent': userAgent,
			},
			body: getFormData(formBoundry, messages),
		    }

		    const response = fetch(options)
			.then(response => response.body.toString())

		    return response
		}
	    }
	}
    }
}
