window.setup = {}

window.setup.apiURL = function() {
  const url = new URL(window.location.origin)
  url.port = '8011'
  return url.toString()
}

window.api = axios.create({
  baseURL: window.setup.apiURL()
})
