export type ApkFile = {
  name: string;
  size: number;
  date: string;
  version: string;
  downloadUrl: string;
};

const redirectBasesByVersion: Record<string, string> = {
  '26.32': 'https://github.com/Bedrox-MC/Launcher/releases/download/26.32',
  '26.20': 'https://github.com/Bedrox-MC/Launcher/releases/download/26.20',
  '26.1': 'https://github.com/Bedrox-MC/Launcher/releases/download/26.1',
  '1.21': 'https://github.com/Bedrox-MC/Launcher/releases/download/1.21',
  '1.20': 'https://github.com/Bedrox-MC/Launcher/releases/download/1.20',
  '1.19': 'https://github.com/Bedrox-MC/Launcher/releases/download/1.19',
};

export const apkFiles: ApkFile[] = [
  {
    name: 'Minecraft-26.32.0.apk',
    size: 472.3,
    date: '2026-07-01',
    version: '26.32',
    downloadUrl: '/api/apk/Minecraft-26.32.0.apk',
  },
  {
    name: 'Minecraft-26.20.0.apk',
    size: 441.1,
    date: '2026-05-06',
    version: '26.20',
    downloadUrl: '/api/apk/Minecraft-26.20.0.apk',
  },
  {
    name: 'Minecraft-26.1.0.apk',
    size: 421.2,
    date: '2026-03-31',
    version: '26.1',
    downloadUrl: '/api/apk/Minecraft-26.1.0.apk',
  },
  {
    name: 'Minecraft-1.21.132.apk',
    size: 416.6,
    date: '2026-01-15',
    version: '1.21',
    downloadUrl: '/api/apk/Minecraft-1.21.132.apk',
  },
  {
    name: 'Minecraft-1.20.81.apk',
    size: 226.1,
    date: '2024-05-06',
    version: '1.20',
    downloadUrl: '/api/apk/Minecraft-1.20.81.apk',
  },
  {
    name: 'Minecraft-1.19.83.apk',
    size: 183.5,
    date: '2023-05-24',
    version: '1.19',
    downloadUrl: '/api/apk/Minecraft-1.19.83.apk',
  },
];

export function getRedirectBaseUrl(filename: string) {
  const matchedFile = apkFiles.find((file) => file.name === filename);
  if (!matchedFile) {
    return 'https://github.com/Bedrox-MC/Launcher/releases/download/latest';
  }

  return redirectBasesByVersion[matchedFile.version] ?? 'https://github.com/Bedrox-MC/Launcher/releases/download/latest';
}
