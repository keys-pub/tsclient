import * as os from 'os'
import * as path from 'path'

const platform = (): NodeJS.Platform => {
  let platform = os.platform()
  if (process.env.KEYS_PLATFORM) {
    platform = process.env.KEYS_PLATFORM as NodeJS.Platform
  }
  return platform
}

export const appDir = (appName: string): string => {
  let supportDir
  const plt = platform()
  switch (plt) {
    case 'linux':
      if (process.env.XDG_DATA_HOME) {
        supportDir = process.env.XDG_DATA_HOME
      } else {
        const homeDir = os.homedir()
        supportDir = path.join(homeDir, '.local', 'share')
      }
      break
    case 'win32':
      if (process.env.LOCALAPPDATA) {
        supportDir = process.env.LOCALAPPDATA
      } else {
        const homeDir = os.homedir()
        supportDir = path.join(homeDir, 'AppData', 'Roaming')
      }
      break
    case 'darwin':
      const homeDir = os.homedir()
      supportDir = path.join(homeDir, 'Library', 'Application Support')
      break
    default:
      throw new Error('unsupported platform ' + plt)
  }

  return path.join(supportDir, appName)
}

export const certPath = (appName: string): string => {
  return path.join(appDir(appName), 'ca.pem')
}
