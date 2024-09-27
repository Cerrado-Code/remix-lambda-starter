import * as yaml from 'js-yaml'
import _get from 'lodash/get'
import rawConfig from '../config/config.yml?raw'

class Config {
  private config

  constructor() {
    this.config = yaml.load(rawConfig) as Record<string, unknown>
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get(path: string): any {
    const result = _get(this.config, path)
    return typeof result === 'string' ? result?.replace(/\$\{([^}]+)\}/g, (_dummy, envvar) => _get(process.env, envvar) ?? '') : result
  }
}

const config = new Config()
export default config
