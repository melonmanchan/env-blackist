import { spawn } from 'child_process'
import pick from 'lodash.pick'

const processes = process.argv.slice(1)
const env = pick(process.env, ['NODE_ENV', 'PATH'])
const ps = spawn(processes[0], ['test.js'], { env })

ps.stdout.on('data', data => console.log(data.toString()))
ps.stderr.on('data', data => console.log(data.toString()))
ps.on('close', code => process.exit(code))
