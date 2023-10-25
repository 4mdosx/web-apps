const content = document.querySelector('#content')

content.innerHTML = 'ping...'

async function main () {
  try {
    const res = await api.get('/x/address')
    content.innerHTML = JSON.stringify(res.data)
  } catch (error) {
    content.innerHTML = 'error: ' + error.message || 'unknown'
  }
}

main()