// type PasswordObject = {
//   url: string
//   login: string
//   password: string
// }
//
// export const sortPass = (data: string) => {
//   const urls1 = [
//     'google',
//     'microsoft',
//     'yahoo',
//     'riot',
//     'epic',
//     'steam',
//     'rockstar',
//     'roblox',
//     'wargaming',
//     'origin',
//     'warface',
//     'battlenet',
//   ]
//   //
//   // const passwords = [
//   //   { google: [] },
//   //   { riot: [] },
//   //   { epic: [] },
//   //   { rockstar: [] },
//   //   { roblox: [] },
//   //   { steam: [] },
//   //   { microsoft: [] },
//   //   { yahoo: [] },
//   //   { wargaming: [] },
//   //   { origin: [] },
//   //   { warface: [] },
//   //   { battlenet: [] },
//   // ]
//
//   const passwords = {
//     google: [] as PasswordObject[],
//     riot: [] as PasswordObject[],
//     epic: [] as PasswordObject[],
//     steam: [] as PasswordObject[],
//     microsoft: [] as PasswordObject[],
//     yahoo: [] as PasswordObject[],
//     wargaming: [] as PasswordObject[],
//     roblox: [] as PasswordObject[],
//     origin: [] as PasswordObject[],
//     warface: [] as PasswordObject[],
//     battlenet: [] as PasswordObject[],
//     rockstar: [] as PasswordObject[],
//   }
//
//   const google: PasswordObject[] = []
//   const riot: PasswordObject[] = []
//   const epic: PasswordObject[] = []
//   const steam: PasswordObject[] = []
//   const microsoft: PasswordObject[] = []
//   const yahoo: PasswordObject[] = []
//   const wargaming: PasswordObject[] = []
//   const roblox: PasswordObject[] = []
//   const origin: PasswordObject[] = []
//   const warface: PasswordObject[] = []
//   const battlenet: PasswordObject[] = []
//   const rockstar: PasswordObject[] = []
//
//   const googleUrls: string[] = ['google']
//   const riotUrls: string[] = ['riot']
//   const epicUrls: string[] = ['epic', 'fortnite']
//   const steamUrls: string[] = ['steam']
//   const microsoftUrls: string[] = ['microsoft', 'login.live', 'hotmail', 'outlook']
//   const yahooUrls: string[] = ['yahoo']
//   const wargamingUrls: string[] = ['wargaming']
//   const robloxUrls: string[] = ['roblox']
//   const originUrls: string[] = ['origin']
//   const warfaceUrls: string[] = ['warface']
//   const battlenetUrls: string[] = ['battlenet']
//   const rockstarUrls: string[] = ['rockstar']
//
//   const urls = [
//     googleUrls,
//     microsoftUrls,
//     yahooUrls,
//     riotUrls,
//     epicUrls,
//     steamUrls,
//     rockstarUrls,
//     robloxUrls,
//     wargamingUrls,
//     originUrls,
//     warfaceUrls,
//     battlenetUrls,
//   ]
//
//   const sort1 = data.split('\n').filter(str => str != '')
//   const sort2 = []
//   for (let i = 0; i < sort1.length; ) {
//     sort2.push({
//       url: sort1[i].split(' ')[1],
//       login: sort1[i + 1].split(' ')[1],
//       password: sort1[i + 2].split(' ')[1],
//     })
//     i += 3
//   }
//
//   // const map = sort2.reduce((r, i) => {
//   //   // r[i.url] = r[i.name] || []
//   //   const url = r[i.url]
//   //
//   //   r[i.url].push(i)
//   //   return r
//   // }, {})
//
//   const checker = (text: string, words: string[]) => {
//     let counter = 0
//
//     for (let i = 0; i < words.length; i++) {
//       if (text.includes(words[i])) counter++
//     }
//
//     return counter
//   }
//
//   sort2.forEach(obj => {
//     const passwordUrl = obj.url
//     for (let i = 0; i < urls.length; i++) {
//       const count = checker(passwordUrl, urls[i])
//       if (count > 0) {
//         if (urls[i][0] === 'google') google.push(obj)
//         else if (urls[i][0] === 'epic') epic.push(obj)
//         else if (urls[i][0] === 'riot') riot.push(obj)
//         else if (urls[i][0] === 'steam') steam.push(obj)
//         else if (urls[i][0] === 'microsoft') microsoft.push(obj)
//         else if (urls[i][0] === 'yahoo') yahoo.push(obj)
//         else if (urls[i][0] === 'wargaming') wargaming.push(obj)
//         else if (urls[i][0] === 'roblox') roblox.push(obj)
//         else if (urls[i][0] === 'origin') origin.push(obj)
//         else if (urls[i][0] === 'warface') warface.push(obj)
//         else if (urls[i][0] === 'battlenet') battlenet.push(obj)
//         else if (urls[i][0] === 'rockstar') rockstar.push(obj)
//       }
//     }
//   })
//
//   passwords.google = google
//   passwords.microsoft = microsoft
//   passwords.yahoo = yahoo
//   passwords.riot = riot
//   passwords.epic = epic
//   passwords.steam = steam
//   passwords.wargaming = wargaming
//   passwords.roblox = roblox
//   passwords.origin = origin
//   passwords.rockstar = rockstar
//   passwords.warface = warface
//   passwords.battlenet = battlenet
//
//   // console.log(sort2)
//
//   console.log(passwords)
// }
