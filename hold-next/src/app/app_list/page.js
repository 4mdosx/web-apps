import fs from 'fs/promises'
import path from 'path'

async function getAllApps () {
  const appsDir = path.join(process.cwd(), 'src', 'app/apps')
  const apps = await fs.readdir(appsDir)
  return apps
}

function appNameFormat (appName) {
  return appName.split('_').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}

export default async function ECMAVersionPage() {
  const apps = await getAllApps()
  return (
    <main className="flex min-h-screen flex-col items-left justify-start p-4">
      <h1>Apps List</h1>
      {
        apps.map((app) => <a href={`/apps/${app}`} className='hover:underline text-blue-500'>{appNameFormat(app)}</a>)
      }
    </main>
  )
}
