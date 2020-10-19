import * as os from 'os'
import * as getenv from 'getenv'
import * as path from 'path'

export const defaultAppName = 'Keys'

export const getAppName = (): string => {
  return getenv.string('KEYS_APP', defaultAppName)
}

const platform = (): NodeJS.Platform => {
  let platform = os.platform()
  if (process.env.KEYS_PLATFORM) {
    platform = process.env.KEYS_PLATFORM as NodeJS.Platform
  }
  return platform
}

export const appDir = (): string => {
  const appName = getAppName()
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

export const certPath = (): string => {
  return path.join(appDir(), 'ca.pem')
}
