const content = document.querySelector('#content')

content.innerHTML = 'ping...'

async function main () {
  try {
    const res = await axios.get('//web.me:8011/x/address')
    content.innerHTML = JSON.stringify(res.data)
  } catch (error) {
    content.innerHTML = 'error: ' + error.message || 'unknown'
  }
}

main()