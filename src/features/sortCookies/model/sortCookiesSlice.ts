import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CookiesObject, FileReaderResponse, fileReaderUtil, ReadCookiesFile } from '@/common'

const initialState = {
  urls: [
    {
      name: 'google',
      urls: ['google'],
    },
    {
      name: 'microsoft',
      urls: ['microsoft', 'login.live', 'hotmail', 'outlook', 'signup.live', 'account.live'],
    },
    {
      name: 'yahoo',
      urls: ['yahoo'],
    },
    {
      name: 'riot',
      urls: ['riot'],
    },
    {
      name: 'epic',
      urls: ['epic', 'fortnite', 'rocket-league'],
    },
    {
      name: 'steam',
      urls: ['steam'],
    },
    {
      name: 'rockstar',
      urls: ['rockstar'],
    },
    {
      name: 'roblox',
      urls: ['roblox'],
    },
    {
      name: 'wargaming',
      urls: ['wargaming', 'worldoftanks', 'worldofwarships', 'worldofwarplanes'],
    },
    {
      name: 'origin',
      urls: ['origin', '.ea.com', 'www.ea.com'],
    },
    {
      name: 'warface',
      urls: ['warface'],
    },
    {
      name: 'battle',
      urls: ['battle.net'],
    },
    {
      name: 'genshin',
      urls: ['genshin', 'honkai', 'zenless', 'mihoyo', 'hoyoverse'],
    },
    {
      name: 'instagram',
      urls: ['instagram', 'threads'],
    },
    {
      name: 'facebook',
      urls: ['facebook'],
    },
    {
      name: 'supercell',
      urls: ['supercell', 'brawlstars', 'clashofclans', 'clashroyale'],
    },
    {
      name: 'minecraft',
      urls: ['minecraft.net'],
    },
    {
      name: 'tiktok',
      urls: ['tiktok'],
    },
    {
      name: 'spotify',
      urls: ['spotify'],
    },
    {
      name: 'ubisoft',
      urls: ['ubisoft', 'uplay'],
    },
    {
      name: 'discord',
      urls: ['discord'],
    },
    {
      name: 'twitch',
      urls: ['twitch'],
    },
    {
      name: 'netflix',
      urls: ['netflix'],
    },
    {
      name: 'amazon',
      urls: ['amazon'],
    },
    {
      name: 'other',
      urls: [],
    },
  ],
  files: [] as ReadCookiesFile[],
  cookies: {
    google: { count: 0 },
    riot: { count: 0 },
    epic: { count: 0 },
    steam: { count: 0 },
    microsoft: { count: 0 },
    yahoo: { count: 0 },
    wargaming: { count: 0 },
    roblox: { count: 0 },
    origin: { count: 0 },
    warface: { count: 0 },
    battle: { count: 0 },
    genshin: { count: 0 },
    rockstar: { count: 0 },
    instagram: { count: 0 },
    facebook: { count: 0 },
    supercell: { count: 0 },
    minecraft: { count: 0 },
    tiktok: { count: 0 },
    spotify: { count: 0 },
    ubisoft: { count: 0 },
    discord: { count: 0 },
    twitch: { count: 0 },
    netflix: { count: 0 },
    amazon: { count: 0 },
    other: { count: 0 },
  } as CookiesObject,
}

const readCookies = createAsyncThunk<
  { res: FileReaderResponse; cookies: CookiesObject },
  { file: File; cookies: CookiesObject }
>('sortCookies/readCookies', async ({ file, cookies }) => {
  return {
    res: await fileReaderUtil({ file }),
    cookies: cookies,
  }
})

export const sortCookiesSlice = createSlice({
  name: 'sortCookies',
  initialState,
  reducers: {
    addCookie: (state, action: PayloadAction<{ url: string; id: number }>) => {
      const url = action.payload.url.split('.')[0]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state.files[action.payload.id].cookiesObj[url].count += 1
    },
    setInitialState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(readCookies.fulfilled, (state, action) => {
      const cookiesString = action.payload.res.result
      const name = action.payload.res.name
      const newObj: ReadCookiesFile = {
        name: name,
        cookiesString: cookiesString,
        cookiesObj: { ...action.payload.cookies },
      }
      state.files.push(newObj)
    })
  },
})

export const sortCookiesActions = sortCookiesSlice.actions
export const sortCookiesThunks = { readCookies }
