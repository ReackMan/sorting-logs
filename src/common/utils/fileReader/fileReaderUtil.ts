import { FileReaderResponse } from '@/common'

type Props = {
  file: File
}

export const fileReaderUtil = async ({ file }: Props): Promise<FileReaderResponse> => {
  const result: string | ArrayBuffer | null = await new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = () => resolve(reader.result)
    reader.readAsText(file)
  })

  return { result, name: file.name, size: file.size }
}
