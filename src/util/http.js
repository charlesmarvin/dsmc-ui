import fetch from 'isomorphic-fetch';
if (process.env.NODE_ENV !== 'production') {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const mapResponse = (response) => {
	if (response.ok) {
		var contentType = response.headers.get('content-type');
		if(contentType && contentType.indexOf('application/json') !== -1) {
			return response.json();
		} else if(contentType && contentType.indexOf('text/') !== -1) {
			return response.text();
		}
    return response;
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
};

const BASE_URL = '/api';
const doFetch = (url, request) => {
	return fetch(`${BASE_URL}${url}`, request).then(mapResponse);
};

const headers = {
	'Content-Type': 'application/json'
};

const defaultOptions = {
	headers: headers,
  credentials: 'same-origin',
  cache: 'default'
};

export const get = (url, options = defaultOptions) => {
	let request = Object.assign({}, defaultOptions, options);
	request.method = 'GET';
	return doFetch(url, request);
}

export const post = (url, data = {}, options = defaultOptions) => {
	let request = Object.assign({}, defaultOptions, options);
	request.method = 'POST';
	request.body = (typeof data === 'object') ? JSON.stringify(data) : data;
	return doFetch(url, request);
}

export const put = (url, data = {}, options = defaultOptions) => {
	let request = Object.assign({}, defaultOptions, options);
	request.method = 'PUT';
	request.body = (typeof data === 'object') ? JSON.stringify(data) : data;
	return doFetch(url, request);
}

export const patch = (url, data = {}, options = defaultOptions) => {
	let request = Object.assign({}, defaultOptions, options);
	request.method = 'PATCH';
	request.body = (typeof data === 'object') ? JSON.stringify(data) : data;
	return doFetch(url, request);
}

export const del = (url, options = defaultOptions) => {
	let request = Object.assign({}, defaultOptions, options);
	request.method = 'DELETE';
	return doFetch(url, request);
}
