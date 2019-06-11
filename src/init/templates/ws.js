let nodejs = `// learn more about websocket functions here: https://arc.codes/guides/ws 
exports.handler = async function subscribe(payload) {
  console.log(JSON.stringify(payload, null, 2))
  return
}`

let ruby = `// learn more about websocket functions here: https://arc.codes/guides/ws
def handler(event)
  puts event
  true
end`

let python = `// learn more about websocket functions here: https://arc.codes/guides/ws
def handler(event, context):
  print(event)
  print(context)
  return True`

module.exports = {nodejs, ruby, python}

