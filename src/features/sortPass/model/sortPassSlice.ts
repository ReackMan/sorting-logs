import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  FileReaderResponse,
  fileReaderUtil,
  PasswordsObject,
  PasswordType,
  ReadPasswordsFile,
} from '@/common'

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
  files: [] as ReadPasswordsFile[],
  passwords: {
    google: [],
    riot: [],
    epic: [],
    steam: [],
    microsoft: [],
    yahoo: [],
    wargaming: [],
    roblox: [],
    origin: [],
    warface: [],
    battle: [],
    genshin: [],
    rockstar: [],
    instagram: [],
    facebook: [],
    supercell: [],
    minecraft: [],
    tiktok: [],
    spotify: [],
    ubisoft: [],
    discord: [],
    twitch: [],
    netflix: [],
    amazon: [],
    other: [],
  } as PasswordsObject,
}

const readPasswords = createAsyncThunk<
  { res: FileReaderResponse; passwords: PasswordsObject },
  { file: File; passwords: PasswordsObject }
>('sortPass/readPasswords', async ({ file, passwords }) => {
  return {
    res: await fileReaderUtil({ file }),
    passwords: passwords,
  }
})

export const sortPassSlice = createSlice({
  name: 'sortPass',
  initialState,
  reducers: {
    addPassword: (state, action: PayloadAction<{ obj: PasswordType; url: string; id: number }>) => {
      const url = action.payload.url.split('.')[0]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const pass = state.files[action.payload.id].passObj[url]
      pass.push(action.payload.obj)
    },
    clearPasswords: state => {
      state.passwords = initialState.passwords
    },
    setInitialState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(readPasswords.fulfilled, (state, action) => {
      const passString = action.payload.res.result
      const name = action.payload.res.name
      const responseObj = action.payload.passwords
      const size = action.payload.res.size
      const newObj: ReadPasswordsFile = {
        name: name,
        size: size,
        passString: passString,
        passObj: { ...responseObj },
      }
      state.files.push(newObj)
    })
  },
})

export const sortPassActions = sortPassSlice.actions
export const sortPassThunks = { readPasswords }
